# 🧩 Guía práctica: Conexión a MongoDB y operaciones CRUD básicas (versión usuarios)

## 🎯 Objetivo
Comprender cómo realizar operaciones **CRUD** (Create, Read, Update, Delete) sobre una colección de usuarios en una base de datos **MongoDB local**, utilizando **Node.js** y el **driver oficial de MongoDB** con funciones asíncronas (`async/await`).

---

## 📘 Descripción de la actividad
Vas a crear un script en **Node.js** que se conecte a **MongoDB local**, realice una inserción, una consulta, una actualización y una eliminación sobre una colección llamada `usuarios`.  
La práctica te permitirá entender cómo funcionan las promesas y el control del flujo asíncrono en JavaScript cuando se trabaja con bases de datos.

---

## 🧱 Pasos a seguir

### 1️⃣ Crear el proyecto
1. Crea una carpeta llamada `mongo_crud_usuarios`.  
2. Dentro, crea un archivo llamado `index.js`.

---

### 2️⃣ Inicializar el proyecto Node
Abre la carpeta en Visual Studio Code y ejecuta en la terminal los siguientes comandos en orden:  
`npm init -y`  
`npm install mongodb`
Nota: En esta práctica no necesitas instalar Express.
Solo trabajaremos con Node.js y el driver oficial de MongoDB, ya que el objetivo es conectarse directamente a la base de datos y realizar operaciones CRUD desde la consola, sin crear todavía un servidor web ni rutas HTTP.

---

### 3️⃣ Crear el archivo `index.js`
El archivo contendrá la estructura del código para realizar las operaciones CRUD:  
- **Conexión a MongoDB local:** URI → `mongodb://127.0.0.1:27017`  
- **Base de datos:** `mibase`  
- **Colección:** `usuarios`  
- **Operaciones a realizar:**  
  1. Conectarse al servidor de MongoDB.  
  2. Insertar un documento en la colección `usuarios`.  
  3. Leer todos los documentos de la colección.  
  4. Actualizar el campo `email` del usuario insertado.  
  5. Borrar ese mismo usuario.  
  6. Cerrar la conexión correctamente.

---

### 4️⃣ Estructura que debe tener el script
El script debe incluir los siguientes apartados:  
- **Configuración inicial de Express (base, sin usar rutas).**  
- **Importación del driver oficial de MongoDB.**  
- **Definición de la URI y del nombre de la base de datos.**  
- **Función principal asíncrona `usar()` que:**  
  - Cree un cliente `MongoClient`.  
  - Se conecte con `await client.connect()`.  
  - Seleccione la base de datos y la colección.  
  - Inserte, lea, actualice y elimine datos.  
  - Use `try...catch...finally` para manejar errores y cerrar la conexión.  
- **Llamada final a `usar();` para ejecutar la función.**

---

### 5️⃣ Ejemplo de datos que se deben insertar
Cuando el script se ejecute, insertará un documento como este:  
`{ "nombre": "Ana", "email": "ana@ejemplo.com" }`  
y lo actualizará posteriormente a:  
`{ "nombre": "Ana", "email": "ana@ejemplo.net" }`  
6️⃣ Ejecución  
Ejecuta el archivo con:  
`node index.js`  
Si todo funciona correctamente, verás en la consola algo similar a:  
`✅ Conectado a MongoDB`  
` Insertado _id: 6724e12345f6abcd89012ef3`  
`📄 Selección: [ { _id: ObjectId("..."), nombre: 'Ana', email: 'ana@ejemplo.com' } ]`  
` Actualizado: 1`  
` Borrado: 1`  
`🔒 Conexión cerrada`
