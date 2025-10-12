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

