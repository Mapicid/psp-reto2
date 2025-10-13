# 🧩 Ejercicio 3 – Parámetros en las rutas y query strings

🎯 **Objetivo:**  
Aprender a recibir información desde la URL y personalizar respuestas en Express.

---

## 📘 Instrucciones

1. Crea un servidor Express que tenga las siguientes rutas:
   - `/saludo/:nombre` → muestra un saludo con el nombre recibido.
   - `/cuadrado/:numero` → calcula el cuadrado del número recibido.
   - `/buscar` → usa query strings (`?producto=teclado&precio=25`).

2. El servidor debe escuchar en el puerto **3000** y mostrar un mensaje en la consola al iniciarse.

---

## 💡 Pistas
- Usa `req.params` y `req.query` para acceder a los datos enviados en la URL.  
- Puedes enviar respuestas con `res.send()` o `res.json()`.  
- Comprueba en el navegador o en Postman que las rutas funcionan correctamente.

---



