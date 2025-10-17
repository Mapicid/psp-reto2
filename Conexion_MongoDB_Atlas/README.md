# 🧠 Mini API CRUD con MongoDB Atlas y Node.js

Este proyecto conecta una API de **Node.js + Express** con **MongoDB Atlas** usando **Mongoose**. Incluye las operaciones CRUD sobre la colección `usuarios`.

> **Nota importante**: no subas tu fichero `.env` a GitHub. Usa el `.env.example` como plantilla.

---

## 🚀 1) Crear y configurar MongoDB Atlas

1. Crea un **cluster Free (M0)** en Atlas.  
2. En **Security → Network Access**, añade **Allow access from anywhere (0.0.0.0/0)**.  
3. En **Security → Database Access**, crea el usuario de base de datos:  
   - Usuario: `tu_usuario`  
   - Contraseña: `tu_contraseña`  
4. En el panel del cluster, pulsa **Connect → Connect your application** y copia la cadena de conexión (por ejemplo):  


---

## ⚙️ 2) Preparar el proyecto

Ejecuta estos comandos en tu carpeta del proyecto:

```bash
npm init -y
npm install express mongoose dotenv

🔑 3) Variables de entorno

Crea un archivo .env (no se sube al repositorio) tomando como ejemplo .env.example:

4) Código del servidor (src/server.js)

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

// Conexión a MongoDB Atlas
mongoose.connect(uri)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Definir modelo
const Usuario = mongoose.model('Usuario', {
  nombre: String,
  correo: String
});

// Rutas CRUD
app.get('/', (req, res) => res.send('Servidor funcionando correctamente 🚀'));

// Crear usuario
app.post('/usuarios', async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// Listar usuarios
app.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

// Actualizar usuario
app.put('/usuarios/:id', async (req, res) => {
  const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Usuario eliminado correctamente' });
});

// Iniciar servidor
app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`));

▶️ 5) Ejecutar y probar
node src/server.js

▶️ 6) Endpoints de prueba (Postman o Thunder Client)
Método	Ruta	Descripción	Ejemplo cuerpo JSON

GET	/	Comprobar que el servidor funciona	—
POST	/usuarios	Crear un nuevo usuario	{ "nombre": "Aitor", "correo": "aitor@correo.com" }
GET	/usuarios	Listar todos los usuarios	—
PUT	/usuarios/:id	Actualizar un usuario	{ "nombre": "Nora", "correo": "nora@correo.com" }
DELETE	/usuarios/:id	Eliminar usuario	—
