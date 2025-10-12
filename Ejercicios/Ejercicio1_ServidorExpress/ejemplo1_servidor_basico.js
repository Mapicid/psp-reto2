// Importamos el módulo Express
import express from "express";

// Creamos una aplicación Express
const app = express();

// Definimos el puerto donde escuchará el servidor
const port = 3000;

// Definimos una ruta principal ("/")
// Cuando alguien accede a http://localhost:3000
// el servidor responde con un mensaje de texto
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente con Express!");
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

