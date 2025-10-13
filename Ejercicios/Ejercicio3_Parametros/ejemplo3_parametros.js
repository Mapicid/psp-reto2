// ejemplo3_parametros.js
// Ejemplo de uso de parámetros y query strings en Express

const express = require('express');
const app = express();
const PORT = 3000;

// Ruta con parámetro: /saludo/:nombre
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`👋 ¡Hola, ${nombre}! Bienvenido al servidor Express.`);
});

// Ruta con parámetro numérico: /cuadrado/:numero
app.get('/cuadrado/:numero', (req, res) => {
  const numero = Number(req.params.numero);
  if (isNaN(numero)) {
    return res.send('⚠️ Debes introducir un número válido.');
  }
  const resultado = numero ** 2;
  res.send(`📐 El cuadrado de ${numero} es ${resultado}.`);
});

// Ruta con query string: /buscar?producto=teclado&precio=25
app.get('/buscar', (req, res) => {
  const { producto, precio } = req.query;
  if (!producto || !precio) {
    return res.send('⚠️ Faltan parámetros en la búsqueda.');
  }
  res.json({
    mensaje: '🔍 Resultado de la búsqueda:',
    producto,
    precio: Number(precio)
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
});
