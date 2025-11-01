# 🧩 Ejercicio: API REST de Usuarios con Express y MongoDB (driver oficial)

## 🎯 Objetivo
Crear una **API REST completa** que gestione una colección de usuarios almacenados en una base de datos **MongoDB local**, utilizando **Node.js**, **Express** y el **driver oficial de MongoDB**.  
La API permitirá realizar operaciones CRUD (Create, Read, Update, Delete) y aplicará **validaciones básicas** antes de insertar o modificar datos.

---

## 📘 Descripción de la actividad
Vas a desarrollar un servidor Express que expone rutas REST para gestionar usuarios.  
Cada usuario tendrá los siguientes campos:
- `nombre` → solo letras y espacios  
- `email` → formato válido  
- `edad` → número entre 0 y 120  

El servidor se conectará a una base de datos local llamada **mibase** y trabajará sobre la colección **usuarios**.  
Las operaciones se realizarán de forma asíncrona usando `async/await`.

---

## ⚙️ 1. Preparar el proyecto
Crea una carpeta llamada `mongo_rutas_usuarios`, ábrela en Visual Studio Code y ejecuta los siguientes comandos:

npm init -y  
npm install express mongodb

---

## 🧱 2. Crear el archivo `server.js`
Este archivo contendrá el código principal del servidor Express conectado a MongoDB, con todas las rutas y validaciones necesarias.

---

## 📜 3. Estructura del servidor
El servidor incluirá las siguientes rutas:

- **GET /** → mensaje de bienvenida  
- **GET /usuarios** → lista todos los usuarios  
- **GET /usuarios/:id** → obtiene un usuario por su `_id`  
- **POST /usuarios** → inserta un nuevo usuario con validaciones  
- **PUT /usuarios/:id** → actualiza los datos de un usuario existente  
- **DELETE /usuarios/:id** → elimina un usuario  

---

