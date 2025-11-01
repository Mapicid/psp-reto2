# 🍃 Guía: Instalación y uso de MongoDB Compass (2025)

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
