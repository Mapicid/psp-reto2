# 🧩 Actividad 4.1 – CRUD con Validaciones e IDs Automáticos

## 🎯 Objetivo
Mejorar el CRUD básico añadiendo **validaciones de datos** y **generación automática de IDs**.  
El objetivo es asegurar que la API gestione los datos correctamente y devuelva respuestas coherentes.

---

## 🧱 Descripción del ejercicio
Partiendo del código del ejercicio anterior (**CRUD básico con Express**), vas a implementar un servidor que controle los posibles errores de entrada de datos y que asigne **IDs automáticos** a los nuevos usuarios.  

Cada usuario tendrá las siguientes propiedades:
- `id` (número, autogenerado)
- `nombre` (texto)
- `email` (texto)
- `edad` (número)

---

## 🚀 Endpoints a implementar

| Método | Ruta | Descripción |
|--------|------|--------------|
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

```js
const nextId = () =>
  usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
```

---

### 2️⃣ Validación de datos
- `nombre`: no puede estar vacío.  
- `edad`: debe ser un número mayor o igual a 0.  
- `email`: debe tener formato válido.

```js
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
```

---

### 3️⃣ Respuestas adecuadas
- `201 Created` → usuario creado correctamente.  
- `400 Bad Request` → datos incorrectos.  
- `404 Not Found` → usuario no encontrado.  

---

## 💡 Ejemplo de validación en el POST

```js
app.post('/usuarios', (req, res) => {
  const { nombre, email, edad } = req.body;

  if (!nombre || !email || edad === undefined) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: 'Formato de email inválido' });
  }

  const nuevoUsuario = {
    id: nextId(),
    nombre,
    email,
    edad
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
});
```

---

## 🧩 Recomendaciones técnicas
- Usa `express.json()` para procesar los datos enviados en formato JSON.  
- Asegúrate de probar los endpoints con **Thunder Client** o **Postman**.  
- Comprueba las respuestas de error (`400`, `404`) y éxito (`201`).  
- Guarda los cambios en tu archivo `ejemplo4_crudUsuarios_validado.js`.

---

## 📤 Entrega
Sube el archivo `ejemplo4_crudUsuarios_validado.js` junto con capturas de tus pruebas en **Thunder Client**, mostrando al menos:
- Un POST con error (email inválido o campo faltante).  
- Un POST correcto.  
- Un PUT y un DELETE válidos.  
- Respuesta 404 al intentar modificar/eliminar un usuario inexistente.


