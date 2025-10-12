# 🧩 Ejercicio 2 – Rutas y respuestas en Express

## 🎯 Objetivo
Comprender cómo Express puede manejar **múltiples rutas** (`/`, `/info`, `/datos`) y devolver **diferentes tipos de respuesta** (texto, HTML y JSON).

---

## 📘 Enunciado
Crea un servidor con **Node.js + Express** que responda a tres rutas distintas:

1. `/` → Devuelve un mensaje de bienvenida en texto.
2. `/info` → Devuelve un texto en formato HTML.
3. `/datos` → Devuelve un objeto JSON con información del curso.

El servidor debe escuchar en el puerto **3000** y mostrar un mensaje en consola al iniciarse.

---

## 💻 Código base

```js
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenido a la página principal");
});

app.get("/info", (req, res) => {
  res.send("<h2>Información del servidor Express</h2>");
});

app.get("/datos", (req, res) => {
  res.json({
    curso: "PSP",
    modulo: "Node.js + Express",
    version: 2
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

