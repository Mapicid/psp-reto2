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

## 🧪 4. Ejecución
Ejecuta el servidor desde la terminal con:

node server.js

Si todo está correcto, verás:

✅ Conectado a MongoDB  
🚀 API escuchando en http://localhost:3000

---

## 🔍 5. Pruebas con Thunder Client o Postman
**GET** → `http://localhost:3000/usuarios`  
**GET (por id)** → `http://localhost:3000/usuarios/<id>`  
**POST** → `http://localhost:3000/usuarios`  

Ejemplo de cuerpo JSON:
```json
{  
  "nombre": "Lucía Gómez",  
  "email": "lucia@mail.com",  
  "edad": 25  
}
```
**PUT** → `http://localhost:3000/usuarios/<id>`  

Ejemplo de actualización:
```json
{  
  "email": "lucia.nueva@mail.com"  
}
```
**DELETE** → `http://localhost:3000/usuarios/<id>`

---

## 💡 Notas finales
- La base de datos y la colección se crean automáticamente al insertar el primer documento.  
- Si MongoDB no está iniciado, ejecuta `net start MongoDB` en Windows antes de lanzar el servidor.  
- Puedes consultar los datos creados visualmente desde **MongoDB Compass**.  
- Este ejercicio continúa el aprendizaje del CRUD básico y prepara el terreno para conectar con **Mongoose** o con **frontends** más adelante.

---

## 🧠 Consejos y buenas prácticas
- Usa nombres de variables descriptivos para que tu código sea fácil de entender.  
- Cada vez que modifiques el código, **reinicia el servidor** para aplicar los cambios.  
- Si recibes un error en consola, lee el mensaje completo: casi siempre indica exactamente en qué línea está el problema.  
- Puedes instalar la herramienta **nodemon** para que el servidor se reinicie automáticamente cada vez que guardes:  
  npm install -g nodemon  
  nodemon server.js  
- Recuerda probar cada ruta de forma individual y revisar las respuestas en formato JSON.  
- Si obtienes errores de validación, revisa las expresiones regulares y los nombres de campos.  
- Evita duplicar correos electrónicos: más adelante podrás añadir una validación de unicidad.

---

## 🧩 Próximo paso
En el siguiente ejercicio, puedes migrar este código a **Mongoose** para simplificar las validaciones, definir un **esquema de usuario** y añadir mensajes de error automáticos.  
Esto permitirá tener un control más limpio y estructurado de los datos en MongoDB.
