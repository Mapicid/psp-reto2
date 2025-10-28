/*
 🧩 Ejemplo: Conexión a MongoDB y operaciones CRUD básicas
 ----------------------------------------------------------
 Cuando una tarea tarda un tiempo (como acceder a una base de datos o leer un archivo)
 y quieres que el programa espere su resultado antes de seguir,
 debes ponerla dentro de una función asíncrona (async)
 y usar await para que espere hasta que termine.
*/

// ------------------------------------------------------
// 1️⃣ Configuramos Express (solo como base, no se usa aquí)
// ------------------------------------------------------
const express = require('express');
const app = express();
const port = 3000;  
// app.use(express.json()); // ← Úsalo cuando recibas JSON por POST/PUT

// ------------------------------------------------------
// 2️⃣ Cargamos el driver oficial de MongoDB
// ------------------------------------------------------
const { MongoClient } = require('mongodb');

// ------------------------------------------------------
// 3️⃣ URI de conexión y nombre de la base de datos
// ------------------------------------------------------
const uri = 'mongodb://127.0.0.1:27017'; // Dirección local por defecto
const dbName = 'mibase';                 // Nombre de tu base de datos

// ------------------------------------------------------
// 4️⃣ Función asíncrona principal (usa async/await)
// ------------------------------------------------------
async function usar() {
  // Creamos el cliente MongoDB
  const client = new MongoClient(uri);

  // Variables que reutilizaremos
  let respuesta, filas, filtro;   

  try {
    // 5️⃣ Conectamos con el servidor de MongoDB
    await client.connect(); // ⏳ Espera a que se establezca la conexión
    console.log("✅ Conectado a MongoDB");

    // 6️⃣ Seleccionamos la colección 'usuarios'
    const controlador = client.db(dbName).collection('usuarios');

    // ------------------------------------------------------
    //  CREATE → Insertar un nuevo documento
    // ------------------------------------------------------
    const nuevoUsuario = { nombre: "Ana", email: "ana@ejemplo.com" };
    respuesta = await controlador.insertOne(nuevoUsuario); // Espera a que se inserte
    console.log(" Insertado _id:", respuesta.insertedId);

    // ------------------------------------------------------
    //  READ → Seleccionar todos los documentos
    // ------------------------------------------------------
    filas = await controlador.find().toArray(); // Espera a que se seleccione
    console.log("📄 Selección:", filas);

    // ------------------------------------------------------
    //  UPDATE → Modificar un documento existente
    // ------------------------------------------------------
    const cambiarUsuario = { $set: { email: "ana@ejemplo.net" } };
    filtro = { nombre: "Ana" }; // Qué documento queremos actualizar
    respuesta = await controlador.updateOne(filtro, cambiarUsuario); // Espera a que se actualice
    console.log(" Actualizado:", respuesta.matchedCount);    

    // ------------------------------------------------------
    // DELETE → Borrar un documento
    // ------------------------------------------------------
    filtro = { nombre: "Ana" }; // Qué documento queremos borrar
    respuesta = await controlador.deleteOne(filtro); // Espera a que se borre
    console.log(" Borrado:", respuesta.deletedCount);    

  } catch (e) {
    // Si algo falla, mostramos el error
    console.error("❌ Error:", e);
  } finally {
    // Cerramos la conexión (muy importante en scripts “one-shot”)
    await client.close(); 
    console.log("🔒 Conexión cerrada");
  }
}

// ------------------------------------------------------
// 7️⃣ Ejecutamos la función principal
// ------------------------------------------------------
usar();

