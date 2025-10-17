// ejemplo4_crudUsuarios_basico.js
// Versión más sencilla del CRUD con Express

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar datos en formato JSON
// express.json() actúa como un “traductor” que convierte el JSON que envía el cliente
// en un objeto JavaScript que el servidor (Express) puede manejar a través de req.body

app.use(express.json());

// Datos simulados en memoria
let usuarios = [
  { id: 1, nombre: "María", email: "maria@mail.com", edad: 30 },
  { id: 2, nombre: "Juan", email: "juan@mail.com", edad: 25 }
];

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
    res.status(404).send("Usuario no encontrado");
  }
});

// 3️⃣ Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  usuarios.push(nuevoUsuario);
  res.status(201).send("Usuario añadido correctamente");
});

// 4️⃣ Actualizar un usuario existente
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const datos = req.body;
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    usuario.nombre = datos.nombre;
    usuario.email = datos.email;
    usuario.edad = datos.edad;
    res.send("Usuario actualizado correctamente");
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

// 5️⃣ Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.send("Usuario eliminado correctamente");
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor en marcha → http://localhost:${PORT}`);
});

