// Ejemplo de uso de parámetros y query strings en Express

// ejemplo3_parametros.js
const express = require('express');
const app = express();
const PORT = 3000;

// 1️⃣ Ruta con parámetro de ruta
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}, ¡bienvenido al servidor Express!`);
});

// 2️⃣ Ruta con número en la URL
app.get('/cuadrado/:numero', (req, res) => {
  const numero = Number(req.params.numero);
  if (isNaN(numero)) {
    res.status(400).send('Error: el valor debe ser un número');
  } else {
    res.send(`El cuadrado de ${numero} es ${numero ** 2}`);
  }
});

// 3️⃣ Ruta con query strings
app.get('/buscar', (req, res) => {
  const { producto, precio } = req.query;
  if (!producto || !precio) {
    res.status(400).send('Faltan parámetros: producto y precio');
  } else {
    res.send(`Buscando ${producto} con precio ${precio}€`);
  }
});

// 4️⃣ Página de inicio con enlaces de prueba
/*
app.get('/', (req, res) => {
  res.send(`
    <h2>Servidor de Ejemplo</h2>
    <ul>
      <li><a href="/saludo/Ane">/saludo/:nombre</a></li>
      <li><a href="/cuadrado/5">/cuadrado/:numero</a></li>
      <li><a href="/buscar?producto=teclado&precio=25">/buscar?producto=&precio=</a></li>
    </ul>
  `);
});
*/


// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
