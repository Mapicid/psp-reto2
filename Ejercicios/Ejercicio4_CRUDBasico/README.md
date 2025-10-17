# 🧠 Ejercicio 4 – CRUD Básico con Express

## 🎯 Objetivo
Aprender a crear una API REST sencilla que permita realizar operaciones **CRUD** (Crear, Leer, Actualizar y Borrar) sobre una lista de usuarios almacenada en memoria (sin base de datos).

---

## 🧱 Descripción del ejercicio
Vas a desarrollar una pequeña API con **Node.js** y **Express** que gestione un listado de usuarios.  
Cada usuario tendrá las siguientes propiedades:
- `id` (número)
- `nombre` (texto)
- `email` (texto)
- `edad` (número)

El servidor deberá permitir consultar, añadir, modificar y eliminar usuarios utilizando los métodos HTTP adecuados (GET, POST, PUT y DELETE).

---

## 🚀 Endpoints a implementar

| Método | Ruta | Descripción |
|--------|------|--------------|
| GET | `/usuarios` | Devuelve la lista completa de usuarios |
| GET | `/usuarios/:id` | Devuelve un usuario por su id |
| POST | `/usuarios` | Crea un nuevo usuario |
| PUT | `/usuarios/:id` | Actualiza un usuario existente |
| DELETE | `/usuarios/:id` | Elimina un usuario existente |

> Los datos se almacenarán en un **array** dentro del código, no en una base de datos.

---

## 💡 Recomendaciones
- Empieza con un array de ejemplo, como:
  ```js
  let usuarios = [
    { id: 1, nombre: "María", email: "maria@mail.com", edad: 30 },
    { id: 2, nombre: "Juan", email: "juan@mail.com", edad: 25 }
  ];
Usa res.json() para enviar respuestas en formato JSON.

Utiliza app.use(express.json()) para poder procesar los datos enviados por POST y PUT.

🧩 Nivel avanzado (opcional)
Añadir validación de datos (por ejemplo, no permitir nombres vacíos o edades negativas).

Implementar un sistema de IDs automáticos.

Devolver mensajes de error personalizados con códigos HTTP.
