# 🧩 Actividad 01 – Mini API de mensajes personalizados

## 🎯 Objetivo
Poner en práctica los conceptos vistos en los **Ejercicios 1, 2 y 3**: rutas, parámetros y consultas (`query strings`) en Express, creando una pequeña API funcional.

---

## 📘 Instrucciones

Crea un nuevo proyecto Node.js llamado **Ejercicio04_MiniAPI** con las siguientes rutas:

### 1️⃣ `/saludo/:nombre/:edad`
Devuelve un mensaje personalizado según la edad:
- Si la edad es menor de 18 → “Hola **Ane**, eres menor de edad.”
- Si la edad es 18 o más → “Hola **Ane**, ya eres mayor de edad.”

👉 Usa `req.params` para leer los valores.

---

### 2️⃣ `/operacion/:a/:b`
Devuelve la suma, resta, multiplicación y división de los dos números recibidos.

Ejemplo:  
`/operacion/8/2` → 

Resultado:
Suma: 10
Resta: 6
Multiplicación: 16
División: 4

👉 Comprueba con `isNaN()` que ambos sean números válidos.

---

### 3️⃣ `/buscar?categoria=&articulo=`
Ejemplo:  
`/buscar?categoria=ropa&articulo=camiseta`  
→ “Buscando **camiseta** en la categoría **ropa**.”

👉 Usa `req.query` para acceder a los valores enviados después del signo `?`.

---

### 4️⃣ Servidor
Haz que el servidor escuche en el **puerto 3000** y muestre en la consola:  


# 🧪 Ejemplos de prueba

| Ruta | Ejemplo de URL | Resultado esperado |
|------|----------------|--------------------|
| `/saludo/:nombre/:edad` | `http://localhost:3000/saludo/Ane/20` | “Hola Ane, ya eres mayor de edad.” |
| `/operacion/:a/:b` | `http://localhost:3000/operacion/6/3` | “Suma: 9, Resta: 3, Multiplicación: 18, División: 2” |
| `/buscar` | `http://localhost:3000/buscar?categoria=tecnologia&articulo=teclado` | “Buscando teclado en la categoría tecnología.” |
