// ejemplo4_crudUsuarios_validado.js
// Versión mejorada del CRUD con validaciones, acumulación de errores y generación automática de IDs

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

// 🧩 Expresiones regulares para validaciones
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/;

// 🧠 Función reutilizable para validar usuarios
function validarUsuario({ nombre, email, edad }) {
  const errores = [];

  // Campos obligatorios (ojo: edad=0 es válido)
  if (nombre === undefined || email === undefined || edad === undefined) {
    errores.push("Faltan datos obligatorios (nombre, email o edad)");
  }

  // Validación del nombre
  if (nombre !== undefined) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      errores.push("El nombre no puede estar vacío");
    } else if (!nameRegex.test(nombre)) {
      errores.push("El nombre solo puede contener letras y espacios");
    }
  }

  // Validación del email
  if (email !== undefined) {
    if (!emailRegex.test(email)) {
      errores.push("Formato de email inválido");
    }
  }

  // Validación de la edad
  if (edad !== undefined) {
    if (typeof edad !== 'number' || !Number.isFinite(edad) || edad < 0) {
      errores.push("La edad debe ser un número mayor o igual a 0");
    }
  }

  return errores;
}

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

// 3️⃣ Crear un nuevo usuario (con validaciones acumuladas)
app.post('/usuarios', (req, res) => {
  const { nombre, email, edad } = req.body;

  const errores = validarUsuario({ nombre, email, edad });
  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

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

// 4️⃣ Actualizar un usuario existente (con validaciones acumuladas)
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const { nombre, email, edad } = req.body;
  const errores = validarUsuario({ nombre, email, edad });
  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

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
