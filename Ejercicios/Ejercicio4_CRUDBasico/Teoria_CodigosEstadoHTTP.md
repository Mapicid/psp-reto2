# 🌐 Teoría: Códigos de estado HTTP en APIs REST

## 🎯 Objetivo
Comprender qué son los **códigos de estado HTTP** y cómo utilizarlos correctamente en una API para indicar si una petición ha tenido **éxito**, **fallo del cliente** o **fallo del servidor**.

---

## 🧩 ¿Qué es un código de estado HTTP?
Cada vez que un cliente (por ejemplo, **Thunder Client**, **Postman** o un **navegador**) envía una solicitud a un servidor, este responde con un **código numérico** que indica el resultado.

El formato de una respuesta HTTP incluye:
- El **código de estado** (por ejemplo, `200`, `404`, `500`)
- Un **mensaje corto** (por ejemplo, `OK`, `Not Found`, `Internal Server Error`)
- (Opcionalmente) un **cuerpo JSON** con más información

---

## 🔢 Clasificación general

| Categoría | Rango | Significado | Ejemplo |
|------------|--------|--------------|----------|
| ✅ **1xx** | 100–199 | Respuestas informativas | *Rara vez usadas en APIs* |
| 🟢 **2xx** | 200–299 | Petición correcta (éxito) | `200 OK`, `201 Created` |
| 🟠 **3xx** | 300–399 | Redirecciones | *Poco comunes en APIs REST* |
| 🔴 **4xx** | 400–499 | Error del cliente | `400 Bad Request`, `404 Not Found` |
| ⚫ **5xx** | 500–599 | Error del servidor | `500 Internal Server Error` |

---

## 💚 Códigos de éxito más comunes

| Código | Nombre | Cuándo se usa |
|--------|---------|----------------|
| **200 OK** | Éxito general | Cuando una operación GET, PUT o DELETE se realiza correctamente |
| **201 Created** | Recurso creado | Cuando se crea algo nuevo (por ejemplo, un usuario o producto) |
| **204 No Content** | Sin contenido | Cuando una operación fue correcta pero no se devuelve cuerpo de respuesta |

### 🧠 Ejemplo:
res.status(201).json({ mensaje: "Usuario creado correctamente" });

---

## 🟡 Errores del cliente (4xx)

| Código | Nombre | Cuándo se usa |
|--------|---------|----------------|
| **400 Bad Request** | Solicitud incorrecta | Datos mal enviados, campos vacíos o formato inválido |
| **401 Unauthorized** | No autenticado | Falta token o credenciales |
| **403 Forbidden** | Prohibido | El usuario no tiene permisos |
| **404 Not Found** | No encontrado | El recurso solicitado no existe |
| **409 Conflict** | Conflicto | El recurso ya existe o hay duplicados |

### 🧠 Ejemplo:
if (!emailOk) return res.status(400).json({ error: "Formato de email inválido" });
if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

---

## 🔴 Errores del servidor (5xx)

| Código | Nombre | Cuándo se usa |
|--------|---------|----------------|
| **500 Internal Server Error** | Error interno | Fallo inesperado en el servidor |
| **503 Service Unavailable** | Servicio no disponible | El servidor está caído o saturado |

### 🧠 Ejemplo:
try {
  // operación de base de datos
} catch (error) {
  res.status(500).json({ error: "Error interno del servidor" });
}

---

## 🧠 Ejemplo completo de respuestas
// ✅ Éxito
res.status(201).json({ mensaje: "Usuario creado correctamente" });

// ⚠️ Error del cliente
res.status(400).json({ error: "Faltan datos obligatorios" });

// 🚫 Recurso no encontrado
res.status(404).json({ error: "Usuario no encontrado" });

// 💥 Error del servidor
res.status(500).json({ error: "Error interno del servidor" });

---

## 🧭 Recomendaciones prácticas

- Siempre **devuelve un código adecuado** al resultado de la operación.  
- Acompaña el código con un **mensaje JSON** que ayude a entender el error.  
- No uses `200 OK` para todo — una API bien diseñada comunica claramente cada caso.  
- Utiliza **201** solo cuando realmente se haya creado un recurso nuevo.

---

## 📘 Resumen rápido

| Categoría | Ejemplo | Significado |
|------------|----------|--------------|
| ✅ Éxito | 200 OK / 201 Created | La operación se realizó correctamente |
| ⚠️ Error del cliente | 400 / 404 | Algo está mal en la petición |
| 💥 Error del servidor | 500 | Fallo interno del servidor |

---

**👉 Conclusión:**  
Dominar los códigos de estado HTTP hace que tus APIs sean más **profesionales, claras y fáciles de depurar.**

