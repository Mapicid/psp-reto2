// 🧩 API REST de Usuarios con Express + MongoDB (driver oficial)
// Rutas: GET /usuarios, GET /usuarios/:id, POST /usuarios, PUT /usuarios/:id, DELETE /usuarios/:id

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(express.json()); // necesario para leer JSON en POST/PUT

// ---- Conexión a Mongo (una sola vez) ----
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'mibase';

let usuarios; // colección compartida por las rutas

async function init() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log('✅ Conectado a MongoDB');

  const db = client.db(dbName);
  usuarios = db.collection('usuarios');

  // 👉 Ruta raíz de cortesía
  app.get('/', (req, res) => res.send('API Usuarios activa. Prueba GET /usuarios'));

  // 📄 GET /usuarios → listar todos
  app.get('/usuarios', async (req, res) => {
    const docs = await usuarios.find().toArray();
    res.json(docs);
  });

  // 🔎 GET /usuarios/:id → obtener uno por _id
  app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID no válido' });

    const doc = await usuarios.findOne({ _id: new ObjectId(id) });
    if (!doc) return res.status(404).json({ error: 'No encontrado' });
    res.json(doc);
  });

  // ➕ POST /usuarios → crear
  app.post('/usuarios', async (req, res) => {
    const { nombre, email, edad } = req.body;
    if (!nombre || !email) return res.status(400).json({ error: 'nombre y email son obligatorios' });

    const nuevo = { nombre, email, ...(edad !== undefined ? { edad: Number(edad) } : {}) };
    const r = await usuarios.insertOne(nuevo);
    res.status(201).json({ _id: r.insertedId, ...nuevo });
  });

  // 🔁 PUT /usuarios/:id → actualizar (parcial: solo campos enviados)
  app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID no válido' });

    const { nombre, email, edad } = req.body;
    const set = {};
    if (nombre !== undefined) set.nombre = nombre;
    if (email  !== undefined) set.email  = email;
    if (edad   !== undefined) set.edad   = Number(edad);

    if (Object.keys(set).length === 0) return res.status(400).json({ error: 'Nada que actualizar' });

    const r = await usuarios.updateOne({ _id: new ObjectId(id) }, { $set: set });
    if (r.matchedCount === 0) return res.status(404).json({ error: 'No encontrado' });

    const actualizado = await usuarios.findOne({ _id: new ObjectId(id) });
    res.json(actualizado);
  });

  // ❌ DELETE /usuarios/:id → borrar
  app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID no válido' });

    const r = await usuarios.deleteOne({ _id: new ObjectId(id) });
    if (r.deletedCount === 0) return res.status(404).json({ error: 'No encontrado' });

    res.status(204).send();
  });

  // ▶️ Arrancar Express
  app.listen(port, () => {
    console.log(`🚀 API escuchando en http://localhost:${port}`);
  });
}

// Iniciar conexión + rutas
init().catch(err => {
  console.error('❌ Error iniciando:', err);
  process.exit(1);
});

