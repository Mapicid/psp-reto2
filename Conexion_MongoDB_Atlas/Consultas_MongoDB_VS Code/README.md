# 🧩 Consultas con MongoDB en VS Code (con conexión a Atlas)

Este proyecto muestra cómo conectarse a **MongoDB Atlas** desde **Visual Studio Code** usando la extensión oficial **MongoDB for VS Code**.  
Permite ejecutar consultas directamente en archivos `.mongodb` sin usar Compass ni la consola.

---

## 🚀 1️⃣ Requisitos previos

- Tener una cuenta en [MongoDB Atlas](https://cloud.mongodb.com)
- Tener creado un **Cluster (M0 gratuito)**
- Haber configurado:
  - En **Network Access** → `0.0.0.0/0` (permitir acceso desde cualquier IP)
  - En **Database Access** → un usuario de base de datos, por ejemplo:
    Usuario: tu_usuario
    Contraseña: tu_password

---

## ⚙️ 2️⃣ Instalar la extensión MongoDB for VS Code

1. Abre **VS Code**
2. En el panel lateral izquierdo, entra en la pestaña de **Extensiones**
3. Busca **MongoDB for VS Code**
4. Instala la que tiene el logo verde de MongoDB y el texto:
   Connect to MongoDB and Atlas directly from your VS Code
5. Reinicia VS Code para asegurarte de que se activa correctamente

---

## 🌐 3️⃣ Conectar la extensión a tu Cluster de Atlas

1. Abre la paleta de comandos (Ctrl + Shift + P o F1)
2. Escribe:
   MongoDB: Connect
3. Elige “Connect with Connection String”
4. Pega tu URI (la misma que usarías en tu archivo .env), por ejemplo:
   mongodb+srv://tu_usuario:tu_password@cluster0.zggmpkg.mongodb.net/psp_reto2?retryWrites=true&w=majority&appName=Cluster0
5. Verás tu cluster y base de datos en la barra lateral izquierda de VS Code.

---

## 📄 4️⃣ Crear un archivo de consultas

1. Crea un nuevo archivo con extensión .mongodb, por ejemplo:
   consultas.mongodb
2. Escribe consultas con sintaxis tipo MongoDB:
   use("psp_reto2");
   db.usuarios.find();
3. Ejecuta con el botón “▶️ Play” (arriba a la derecha del editor) o con el atajo:
   Ctrl + Alt + C

---

## 🧩 5️⃣ Ejemplos de consultas útiles

// Todos los usuarios  
db.usuarios.find();


// Solo el nombre y correo  
db.usuarios.find({}, { nombre: 1, correo: 1 });


// Buscar por nombre  
db.usuarios.find({ nombre: "Aitor" });


// Insertar un nuevo usuario  
db.usuarios.insertOne({ nombre: "Nora", correo: "nora@correo.com" });


// Actualizar correo de un usuario  
db.usuarios.updateOne(
  { nombre: "Aitor" },
  { $set: { correo: "nuevo@correo.com" } }
);


// Borrar un usuario  
db.usuarios.deleteOne({ nombre: "Jon" });

---

## 🧠 6️⃣ Consejos

- Si la conexión falla, revisa que tu IP esté permitida en Network Access (0.0.0.0/0).  
- Asegúrate de que la base de datos (psp_reto2) tenga al menos un documento; de lo contrario, no aparecerá en Atlas.  
- Puedes explorar y editar documentos directamente desde la barra lateral de MongoDB en VS Code.

---

✅ Listo para practicar consultas directamente desde VS Code sin salir del entorno de desarrollo.

