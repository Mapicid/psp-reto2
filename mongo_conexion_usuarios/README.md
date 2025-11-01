# 🍃 Guía práctica: MongoDB Compass y creación de colecciones relacionadas (2025)

## 🎯 Objetivo
Instalar y usar **MongoDB Compass** para crear una base de datos local con tres colecciones (`clientes`, `productos`, `pedidos`), introducir documentos en formato JSON y establecer relaciones entre ellas mediante los campos `ObjectId`.

---

## 🧩 1. Descargar e instalar MongoDB
1. Accede a la página oficial:  
   👉 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Descarga **MongoDB Community Server** (última versión).
3. Durante la instalación:
   - Elige **Complete**.
   - Mantén todas las opciones por defecto.
4. Se instalarán:
   - **MongoDB Server** (servicio `mongod`)
   - **MongoDB Shell (mongosh)**
   - **MongoDB Compass**

---

## ⚙️ 2. Verificar que MongoDB está funcionando
### En Windows
Abre PowerShell o CMD y ejecuta:

`net start MongoDB`

Si ya está iniciado, aparecerá:  
**The MongoDB service is already running**

---

## 🚀 3. Abrir MongoDB Compass
1. Busca el icono **MongoDB Compass** en el escritorio.
2. Al abrirlo, verás el campo **Connection String**.  
   Escribe:  
   `mongodb://127.0.0.1:27017`
3. Pulsa **Connect**.
4. Si todo va bien, verás bases de datos del sistema (`admin`, `config`, `local`).

---

## 🧱 4. Crear tu base de datos
1. Pulsa **Create Database**.  
2. Introduce:  
   - **Database Name:** `mibase`  
   - **Collection Name:** `clientes`
3. Pulsa **Create Database**.

Tu base de datos `mibase` aparece en el panel izquierdo.

---

## 🧩 5. Crear colecciones adicionales
Crea otras dos colecciones dentro de `mibase`:
- `productos`
- `pedidos`

Haz clic en **+** junto al nombre de la base de datos y elige **Create Collection**.

---

## ✍️ 6. Insertar documentos manualmente

### A. Insertar clientes
1. Abre la colección **clientes**.  
2. Pulsa **Insert Document**.  
3. Escribe lo siguiente en formato JSON:
```json
{
  "nombre": "María López",
  "email": "maria@mail.com",
  "telefono": "678123456"
}
```
Pulsa **Insert**.

MongoDB añadirá automáticamente un campo `_id` (identificador único del documento).  
Puedes cambiar de vista entre **Table View** (tabla) y **JSON View** (texto).

---

### B. Insertar productos
1. Abre la colección **productos**.  
2. Inserta un documento como:
```json
{
  "nombre": "Teclado inalámbrico",
  "precio": 29.99,
  "stock": 50
}
```
---

### C. Insertar pedidos
1. Abre la colección **pedidos**.  
2. Inserta un documento con un campo `idCliente` que apunte al `_id` del cliente anterior:
```json
{
  "fecha": "2025-11-01",
  "total": 29.99,
  "idCliente": "ObjectId_que_copies_de_clientes"
}
```

Para copiar el `_id` del cliente:  
Abre la colección `clientes`.  
Copia el valor de `_id` (por ejemplo `"6724fc3a9d3e0b16c95a1c2b"`).  
Pégalo en `idCliente` del pedido, así:
```json
{
  "fecha": "2025-11-01",
  "total": 29.99,
  "idCliente": ObjectId("6724fc3a9d3e0b16c95a1c2b")
}
```
MongoDB reconocerá el `ObjectId` como una referencia válida.

---

## 🔁 7. Añadir relaciones básicas

### A. Añadir idProducto en pedidos
Abre la colección `pedidos` y edita el documento para añadir un campo con el id del producto:
```json
{
  "fecha": "2025-11-01",
  "total": 29.99,
  "idCliente": ObjectId("6724fc3a9d3e0b16c95a1c2b"),
  "idProducto": ObjectId("6724fd5e3a7d2b09f84d1b9a")
}
```
---

### B. Añadir idPedido en clientes
Ve a la colección `clientes` y edita el documento para añadir un campo que haga referencia al pedido:
```json
{
  "nombre": "María López",
  "email": "maria@mail.com",
  "telefono": "678123456",
  "idPedido": ObjectId("6724fef93a7d2b09f84d1b9b")
}
```
De esta forma simulas las relaciones entre colecciones, aunque MongoDB no usa claves foráneas ni relaciones fijas como las bases de datos relacionales.

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

## 🧪 10. Actividad práctica
1. Crea la base de datos `mibase` con las colecciones `clientes`, `productos` y `pedidos`.  
2. Inserta al menos **2 documentos** en cada colección.  
3. Relaciona cada pedido con su cliente y producto mediante los campos `idCliente` e `idProducto`.  
4. Añade en `clientes` el campo `idPedido` correspondiente.  
5. Haz una captura de pantalla mostrando tus tres colecciones y los documentos relacionados.  
6. Entrega un breve informe explicando el proceso y las capturas de pantalla.

---

## ✅ 11. Comprobación final
- ¿Puedes conectarte en Compass a `mongodb://127.0.0.1:27017`?  
- ¿Ves la base de datos `mibase` con sus tres colecciones?  
- ¿Cada documento tiene su `_id` y relaciones correctas?  
- ¿Guardaste las capturas para el informe?  

Si todo es **sí**, ¡enhorabuena! Has completado correctamente la configuración y práctica con MongoDB Compass. 🎉
