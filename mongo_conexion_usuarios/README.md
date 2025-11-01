# 🍃 Guía actualizada: Instalación y uso de MongoDB Compass (2025)

## 🎯 Objetivo
Instalar **MongoDB Community Server** y **MongoDB Compass**, conectarse al servidor local y crear las primeras colecciones (`clientes`, `productos`, `pedidos`) con sus relaciones básicas. Esta guía está actualizada y puede seguirse sin necesidad de Docker ni configuraciones adicionales.

---

## 🧩 1. Descargar MongoDB
1. Accede a la página oficial:  
   👉 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. En la sección **“Version”**, elige la versión estable más reciente (Windows/macOS/Linux).
3. Deja seleccionadas las opciones por defecto y haz clic en **Download**.
4. Ejecuta el instalador descargado.
5. En el asistente de instalación:
   - Pulsa **Next**.
   - Elige **Complete** (instalación completa).
   - Mantén **todas las opciones por defecto**.
6. Espera a que finalice la instalación. Al terminar, tendrás instalados:
   - El servidor **MongoDB** (servicio `mongod`).
   - El shell de comandos **mongosh**.
   - La interfaz gráfica **MongoDB Compass**.

---

## ⚙️ 2. Verificar que MongoDB funciona
### En Windows
1. Abre **PowerShell** o **CMD**.  
2. Escribe: `net start MongoDB`  
   Si el servicio ya está en ejecución, verás el mensaje:  
   **“The MongoDB service is already running”**

### En Linux o macOS
- En Linux: `sudo systemctl status mongod`  
- En macOS (Homebrew): `brew services list`

Si todo está correcto, ya puedes abrir **MongoDB Compass**.

---

## 🚀 3. Primeros pasos en MongoDB Compass

### Paso 1: Abrir Compass
Busca el icono de **MongoDB Compass** (hoja verde 🍃) en el escritorio o el menú de inicio y ejecútalo.

### Paso 2: Conectarse al servidor local
1. En la pantalla inicial, verás un campo de conexión vacío.  
2. Escribe esta dirección: `mongodb://127.0.0.1:27017`  
3. Pulsa **Connect**.  
4. Si la conexión es correcta, verás las bases de datos del sistema:
   - `admin`
   - `config`
   - `local`

✅ Esto confirma que el servidor MongoDB está funcionando correctamente en tu equipo.

---

## 🧱 4. Crear tu propia base de datos
1. Pulsa **Create Database**.  
2. Escribe:  
   - **Database Name:** `mibase`  
   - **Collection Name:** `clientes`  
3. Pulsa **Create Database**.  

Tu nueva base de datos aparecerá en el panel izquierdo con la colección `clientes`.

---

## 🧩 5. Crear más colecciones
Vamos a crear otras colecciones relacionadas para practicar:  
1. Haz clic en el icono **“+”** junto a `mibase` para crear una nueva colección llamada `productos`.  
2. Repite el proceso para crear otra colección llamada `pedidos`.  

Ahora tu base de datos `mibase` tendrá tres colecciones:
- `clientes`
- `productos`
- `pedidos`

---

## ✍️ 6. Insertar documentos manualmente

### A. Insertar clientes
1. Entra en la colección **clientes**.  
2. Pulsa **Insert Document**.  
3. Escribe el siguiente ejemplo en formato JSON:

{
"nombre": "María López",
"email": "maria@mail.com",
"telefono": "678123456"
}

4. Pulsa **Insert**.  
5. MongoDB añadirá automáticamente un campo `_id` (identificador único del documento).  
Puedes cambiar de vista entre **Table View** (tabla) y **JSON View** (texto).

---

### B. Insertar productos
1. Abre la colección **productos**.  
2. Inserta un documento como:

{
"nombre": "Teclado inalámbrico",
"precio": 29.99,
"stock": 50
}

---

### C. Insertar pedidos
1. Abre la colección **pedidos**.  
2. Inserta un documento con un campo `idCliente` que apunte al `_id` del cliente anterior:

{
"fecha": "2025-11-01",
"total": 29.99,
"idCliente": "ObjectId_que_copies_de_clientes"
}

3. Para copiar el `_id` del cliente:
- Abre la colección `clientes`.  
- Copia el valor de `_id` (por ejemplo `"6724fc3a9d3e0b16c95a1c2b"`).  
- Pégalo en `idCliente` del pedido, así:

{
"fecha": "2025-11-01",
"total": 29.99,
"idCliente": ObjectId("6724fc3a9d3e0b16c95a1c2b")
}

MongoDB reconocerá el `ObjectId` como una referencia válida.

---

## 🔁 7. Añadir relaciones básicas

### A. Añadir idProducto en pedidos
Abre la colección `pedidos` y edita el documento para añadir un campo con el id del producto:

{
"fecha": "2025-11-01",
"total": 29.99,
"idCliente": ObjectId("6724fc3a9d3e0b16c95a1c2b"),
"idProducto": ObjectId("6724fd5e3a7d2b09f84d1b9a")
}

### B. Añadir idPedido en clientes
Ve a la colección `clientes` y edita el documento para añadir un campo que haga referencia al pedido:

{
"nombre": "María López",
"email": "maria@mail.com",
"telefono": "678123456",
"idPedido": ObjectId("6724fef93a7d2b09f84d1b9b")
}

De esta forma simulas las relaciones entre colecciones, aunque MongoDB **no usa claves foráneas** ni relaciones fijas como las bases de datos relacionales.

---

## 💡 8. Conceptos clave

| Concepto | Descripción |
|-----------|-------------|
| **Base de datos (Database)** | Contiene varias colecciones relacionadas. |
| **Colección (Collection)** | Conjunto de documentos (similar a una tabla). |
| **Documento (Document)** | Registro en formato JSON. |
| **_id** | Identificador único creado automáticamente por MongoDB. |
| **ObjectId** | Tipo especial que representa ese identificador. |
| **Compass** | Herramienta visual para manejar MongoDB sin usar comandos. |

---

## ⚠️ 9. Errores frecuentes y soluciones

| Problema | Causa | Solución |
|-----------|--------|----------|
| No se conecta a `127.0.0.1:27017` | El servicio MongoDB no está iniciado | Ejecuta `net start MongoDB` |
| Compass no muestra datos | No se ha creado ninguna base de datos aún | Crea `mibase` y sus colecciones |
| Campos `ObjectId` no reconocidos | Se han pegado como texto | Asegúrate de escribir `ObjectId("...")` sin comillas externas |
| Compass no arranca | Falta el servidor MongoDB | Reinstala con la opción **Complete** |

---

## 🧪 10. Actividad práctica sugerida
1. Crea la base de datos `mibase` con las colecciones `clientes`, `productos` y `pedidos`.  
2. Inserta al menos **2 documentos** en cada colección.  
3. Relaciona cada pedido con su cliente y producto mediante los campos `idCliente` e `idProducto`.  
4. Añade en `clientes` el campo `idPedido` correspondiente.  
5. Haz una captura de pantalla mostrando tus tres colecciones y los documentos relacionados.  
6. Entrega el documento con tus capturas y una breve descripción del proceso.

---

## ✅ 11. Comprobación final
- ¿Puedes conectarte en Compass a `mongodb://127.0.0.1:27017`?  
- ¿Ves la base de datos `mibase` con sus tres colecciones?  
- ¿Cada documento tiene su `_id` y relaciones correctas?  
- ¿Guardaste las capturas para el informe?  

Si todo es **sí**, ¡enhorabuena! Tu entorno de MongoDB local está funcionando perfectamente y ya entiendes los conceptos fundamentales de colecciones, documentos y relaciones básicas. 🎉
