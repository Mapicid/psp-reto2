# 🌐 Actividad 02 – API REST con Express y MongoDB Atlas

## 🎯 Objetivo
Crear una **API REST funcional** en Node.js que se conecte a una base de datos **MongoDB Atlas**, utilizando una colección llamada `usuarios`.

Esta práctica es la continuación natural de la *Mini API CRUD (versión sencilla)*, pero ahora los datos se guardan en **una base de datos real en la nube** (MongoDB Atlas).  
El objetivo es que comprendas cómo **Node.js + Express + MongoDB** trabajan juntos.

---

## 🧱 Estructura del proyecto

tu-proyecto/
├─ server.js
├─ .env
├─ package.json
└─ node_modules/

---

## ⚙️ Paso 1. Configurar entorno y dependencias

1. Crea una carpeta para el proyecto y entra en ella:

   mkdir API_MongoDB
   cd API_MongoDB

2. Inicializa npm y añade las dependencias necesarias:

   npm init -y
   npm i express mongodb dotenv cors

3. Crea un archivo `.env` con el siguiente contenido (usa tus propios datos de Atlas):

   MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/psp_reto2?retryWrites=true&w=majority
   PORT=3000

💡 Consejo: Si trabajas con la base de datos `psp_reto2` y la colección `usuarios`, puedes reutilizar el URI que te haya proporcionado el profesor.

---

## 🖥️ Paso 2. Código principal (server.js)

Copia este código en `server.js`:

// server.js
// API REST básica con Express + MongoDB Atlas (colección: usuarios)

const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

let client;
let db;
let usuarios;

// Función principal: conecta con Atlas y arranca la API
async function start() {
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db();
    usuarios = db.collection('usuarios');

    // Si la colección está vacía, insertamos tres documentos de ejemplo
    const count = await usuarios.countDocuments();
    if (count === 0) {
      await usuarios.insertMany([
        { nombre: 'jon', correo: 'jon@correo.com' },
        { nombre: 'iker', correo: 'iker@correo.com' },
        { nombre: 'ana', correo: 'ana@correo.com' },
      ]);
      console.log('✅ Colección inicializada con 3 usuarios');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Servidor en marcha: http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error);
    process.exit(1);
  }
}

// ------------------- RUTAS CRUD -------------------

// GET → listar todos los usuarios
app.get('/api/usuarios', async (req, res) => {
  const docs = await usuarios.find().toArray();
  res.json(docs);
});

// GET → buscar por ID
app.get('/api/usuarios/:id', async (req, res) => {
  try {
    const _id = new ObjectId(req.params.id);
    const doc = await usuarios.findOne({ _id });
    if (!doc) return res.status(404).json({ error: 'No encontrado' });
    res.json(doc);
  } catch {
    res.status(400).json({ error: 'ID no válido' });
  }
});

// POST → crear un nuevo usuario
app.post('/api/usuarios', async (req, res) => {
  const { nombre, correo } = req.body;
  if (!nombre || !correo) {
    return res.status(400).json({ error: 'Faltan campos: nombre y correo' });
  }
  const r = await usuarios.insertOne({ nombre, correo });
  res.status(201).json({ _id: r.insertedId, nombre, correo });
});

// PUT → actualizar por ID
app.put('/api/usuarios/:id', async (req, res) => {
  try {
    const _id = new ObjectId(req.params.id);
    const { nombre, correo } = req.body;
    const update = {};
    if (nombre) update.nombre = nombre;
    if (correo) update.correo = correo;
    const r = await usuarios.findOneAndUpdate(
      { _id },
      { $set: update },
      { returnDocument: 'after' }
    );
    if (!r.value) return res.status(404).json({ error: 'No encontrado' });
    res.json(r.value);
  } catch {
    res.status(400).json({ error: 'Error actualizando usuario' });
  }
});

// DELETE → eliminar por ID
app.delete('/api/usuarios/:id', async (req, res) => {
  try {
    const _id = new ObjectId(req.params.id);
    const r = await usuarios.deleteOne({ _id });
    if (r.deletedCount === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json({ ok: true });
  } catch {
    res.status(400).json({ error: 'Error eliminando usuario' });
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('✅ API REST en funcionamiento. Prueba /api/usuarios');
});

start();

---

## 🚀 Paso 3. Ejecutar la API

Inicia el servidor con:

node server.js

Verás algo como:

✅ Colección inicializada con 3 usuarios  
🚀 Servidor en marcha: http://localhost:3000

---

## 🧪 Paso 4. Probar la API con Thunder Client (VS Code)

Abre **Thunder Client** (icono del rayo en VS Code).  
Crea una nueva colección llamada **API MongoDB**.  
Añade las siguientes peticiones:

Método | Ruta | Descripción | Ejemplo de body  
--------|------|-------------|----------------  
GET | http://localhost:3000/api/usuarios | Lista todos los usuarios | —  
POST | http://localhost:3000/api/usuarios | Crea un nuevo usuario | { "nombre": "maria", "correo": "maria@correo.com" }  
GET | http://localhost:3000/api/usuarios/:id | Consulta un usuario por ID | —  
PUT | http://localhost:3000/api/usuarios/:id | Actualiza nombre o correo | { "correo": "nuevo@correo.com" }  
DELETE | http://localhost:3000/api/usuarios/:id | Elimina un usuario | —  

💡 Consejo: Para probar las rutas con `:id`, copia el `_id` de uno de los usuarios devueltos por el **GET inicial**.

---

## 🧩 Alternativa: probar desde MongoDB Atlas Playground

Abre **Playground** en Atlas.  
Conecta al cluster que contiene `psp_reto2`.  
Ejecuta consultas directamente, por ejemplo:

// Mostrar todos los usuarios
db.usuarios.find()

// Insertar uno nuevo
db.usuarios.insertOne({ nombre: "alex", correo: "alex@correo.com" })

// Actualizar por nombre
db.usuarios.updateOne({ nombre: "ana" }, { $set: { correo: "ana.actualizado@correo.com" } })

// Eliminar por nombre
db.usuarios.deleteOne({ nombre: "iker" })

---

## 🧠 Reflexión final

Este ejemplo muestra cómo una **API REST** se comunica con una base de datos **NoSQL (MongoDB)** usando **Express**.

Cada ruta corresponde a una operación CRUD:

C → Create (POST)  
R → Read (GET)  
U → Update (PUT)  
D → Delete (DELETE)

✨ Extra (opcional): Agrega validación de campos (por ejemplo, verificar formato de correo) o un contador de documentos para mostrar cuántos usuarios hay en la base de datos.

