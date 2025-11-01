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
2. Escribe:

   ![MongoDB Compass Icono](https://www.mongodb.com/docs/assets/compass/icon.png)

2. **Introduce la URI de conexión local:**

