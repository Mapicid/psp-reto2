// ejemplo4_crudUsuarios_validado.js
// Versión mejorada del CRUD con validaciones y generación automática de IDs

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Datos simulados en memoria
let usuarios = [
  { id: 1, nombre: "María", email: "maria@mail.com", edad: 30 },
  { id: 2, nombre: "Juan", email: "juan@mail.com", edad: 25 }
];

// 🧩 Función para generar el siguiente ID disponible
const nextId = () =>
  usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

// 🧩 Expresión regular para validar emails
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 1️⃣ Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// 2️⃣ Obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});

// 3️⃣ Crear un nuevo usuario (con validaciones)
app.post('/usuarios', (req, res) => {
  const { nombre, email, edad } = req.body;

  // 🔍 Validaciones
  if (!nombre || !email || edad === undefined) {
    return res.status(400).json({ error: "Faltan datos obligatorios (nombre, email o edad)" });
  }

  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({ error: "El nombre no puede estar vacío" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
  }

  if (typeof edad !== 'number' || Number.isNaN(edad) || edad < 0) {
    return res.status(400).json({ error: "La edad debe ser un número mayor o igual a 0" });
  }

  // 🧱 Crear usuario con ID automático
  const nuevoUsuario = {
    id: nextId(),
    nombre: nombre.trim(),
    email: email.toLowerCase(),
    edad
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json({
    mensaje: "Usuario añadido correctamente",
    usuario: nuevoUsuario
  });
});

// 🧪 Ejemplo de JSON para probar POST
/*
{
  "nombre": "Lucía",
  "email": "lucia@mail.com",
  "edad": 22
}
*/

// 4️⃣ Actualizar un usuario existente (con validaciones)
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, email, edad } = req.body;
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  // 🔍 Validaciones
  if (!nombre || !email || edad === undefined) {
    return res.status(400).json({ error: "Faltan datos obligatorios (nombre, email o edad)" });
  }

  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({ error: "El nombre no puede estar vacío" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
  }

  if (typeof edad !== 'number' || Number.isNaN(edad) || edad < 0) {
    return res.status(400).json({ error: "La edad debe ser un número mayor o igual a 0" });
  }

  // 🧱 Actualización
  usuario.nombre = nombre.trim();
  usuario.email = email.toLowerCase();
  usuario.edad = edad;

  res.json({
    mensaje: "Usuario actualizado correctamente",
    usuario
  });
});

// 5️⃣ Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const existe = usuarios.some(u => u.id === id);

  if (!existe) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ mensaje: "Usuario eliminado correctamente" });
});

// 🚀 Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor en marcha → http://localhost:${PORT}`);
});

