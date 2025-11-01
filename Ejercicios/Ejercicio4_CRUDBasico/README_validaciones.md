# 🧩 Ejercicio 4.1 – CRUD con Validaciones e IDs Automáticos

## 🎯 Objetivo
Mejorar el CRUD básico añadiendo **validaciones de datos** y **generación automática de IDs**.  
El objetivo es asegurar que la API gestione los datos correctamente y devuelva respuestas coherentes.

---

## 🧱 Descripción del ejercicio
Partiendo del código del ejercicio anterior (`ejemplo4_crudUsuarios_basico.js`), vas a implementar un servidor que:
- Controle los posibles **errores de entrada de datos**.
- Genere **IDs automáticos** para los nuevos usuarios.

Cada usuario tendrá las siguientes propiedades:
- `id` (número, autogenerado)
- `nombre` (texto)
- `email` (texto)
- `edad` (número)

---

## 🚀 Endpoints a implementar

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/usuarios` | Devuelve la lista completa de usuarios |
| GET | `/usuarios/:id` | Devuelve un usuario por su id |
| POST | `/usuarios` | Crea un nuevo usuario con validación de datos |
| PUT | `/usuarios/:id` | Actualiza un usuario existente |
| DELETE | `/usuarios/:id` | Elimina un usuario existente |

---

## ✅ Requisitos nuevos

### 1️⃣ ID automático
El campo `id` ya no se enviará desde el cliente.  
El servidor lo generará automáticamente con el siguiente número disponible:

`const nextId = () => usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;`

---

### 2️⃣ Validación de datos

- `nombre`: no puede estar vacío ni contener números.  
  `const nombreOk = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(nombre);`
- `edad`: debe ser un número mayor o igual a 0.  
  `const edadOk = typeof edad === 'number' && edad >= 0;`
- `email`: debe tener formato válido.  
  `const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);`

Si alguno de los datos no cumple los requisitos, la API devolverá **400 Bad Request** con un mensaje explicativo.

---

### 3️⃣ Respuestas adecuadas del servidor

| Código | Significado | Ejemplo |
|--------|--------------|---------|
| **201 Created** | Usuario creado correctamente | POST correcto |
| **400 Bad Request** | Datos incorrectos o faltantes | POST sin `nombre` o con email mal formado |
| **404 Not Found** | Usuario no encontrado | PUT o DELETE con un `id` inexistente |

---

## 💡 Ejemplo de validación en el POST

`app.post('/usuarios', (req, res) => {
  const { nombre, email, edad } = req.body;

  if (!nombre || !email || edad === undefined) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nombreOk = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(nombre);
  const edadOk = typeof edad === 'number' && edad >= 0;

  if (!emailOk) return res.status(400).json({ error: 'Formato de email inválido' });
  if (!nombreOk) return res.status(400).json({ error: 'El nombre solo puede contener letras y espacios' });
  if (!edadOk) return res.status(400).json({ error: 'La edad debe ser un número mayor o igual a 0' });

  const nuevoUsuario = {
    id: nextId(),
    nombre,
    email,
    edad
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
});`

---

## 🧩 Recomendaciones técnicas

- Usa `express.json()` para procesar los datos enviados en formato JSON.  
- Prueba los endpoints con **Thunder Client** o **Postman**.  
- Comprueba las respuestas de error (400, 404) y éxito (201).  
- Guarda los cambios en el archivo **`ejemplo4_crudUsuarios_validado.js`**.

---

## 📤 Entrega
Sube el archivo `ejemplo4_crudUsuarios_validado.js` junto con capturas de tus pruebas en Thunder Client mostrando al menos:

1. Un **POST con error** (email inválido o campo faltante).  
2. Un **POST correcto** (usuario válido creado).  
3. Un **PUT** y un **DELETE** válidos.  
4. Una **respuesta 404** al intentar modificar o eliminar un usuario inexistente.

---

## 💡 Recursos de apoyo
- [📘 Teoría – Métodos de Arrays en JavaScript](./Teoria_MetodosArrays.md)  
- [📘 Teoría – Expresiones Regulares en JavaScript](./Teoria_ExpresionesRegulares.md)

