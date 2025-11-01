# 🧩 Teoría: Expresiones Regulares en JavaScript

## 🎯 Objetivo
Comprender qué son las **expresiones regulares (RegEx)** y cómo utilizarlas en JavaScript para **validar datos** como nombres, correos electrónicos o números en un CRUD.

---

## 🧱 ¿Qué es una expresión regular?
Una **expresión regular** (o *regex*) es un patrón que sirve para buscar o validar texto.  
En JavaScript se define entre barras `/.../`:

~~~js
const patron = /abc/;
~~~

Se utiliza junto con los métodos:
- `.test()` → devuelve `true` o `false` si el texto cumple el patrón.  
- `.match()` → devuelve las coincidencias encontradas.

---

## ⚙️ Ejemplo básico

~~~js
const texto = "Hola mundo";
const patron = /Hola/;
console.log(patron.test(texto)); // true
~~~

---

## 🧩 Flags más usados

| Flag | Significado | Ejemplo |
|------|--------------|---------|
| `i`  | Ignora mayúsculas/minúsculas | `/abc/i` detecta "ABC" |
| `g`  | Busca todas las coincidencias | `/a/g` en "banana" → 3 |
| `m`  | Modo multilínea | `^` y `$` actúan por línea |

---

## 🔡 Clases de caracteres

| Símbolo | Significado | Ejemplo |
|--------|-------------|---------|
| `.`    | Cualquier carácter (excepto salto de línea) | `/./` |
| `\d`   | Dígito `[0-9]` | `/\d+/` |
| `\D`   | No dígito | `/\D+/` |
| `\w`   | Carácter de palabra `[A-Za-z0-9_]` | `/\w+/` |
| `\W`   | No palabra | `/\W+/` |
| `\s`   | Espacio/tab/salto | `/\s+/` |
| `\S`   | No espacio | `/\S+/` |
| `[aeiou]` | Cualquiera del conjunto | `/[aeiou]/` |
| `[^aeiou]` | Cualquiera **excepto** los del conjunto | `/[^aeiou]/` |

---

## 🔢 Cuantificadores

| Símbolo | Significado | Ejemplo |
|--------|-------------|---------|
| `*`    | 0 o más     | `/\d*/` |
| `+`    | 1 o más     | `/\d+/` |
| `?`    | 0 o 1       | `/colou?r/` |
| `{n}`  | Exactamente n | `/\d{3}/` |
| `{n,}` | Al menos n  | `/\d{2,}/` |
| `{n,m}`| Entre n y m | `/\d{2,4}/` |

> Añade `?` después del cuantificador para hacerlo **no codicioso** (*lazy*): `.+?`

---

## 🧱 Anclas y fronteras

| Símbolo | Significado | Ejemplo |
|--------|-------------|---------|
| `^`    | Inicio de texto | `/^Hola/` |
| `$`    | Fin de texto    | `/fin$/` |
| `\b`   | Frontera de palabra | `/\bweb\b/` |
| `\B`   | No-frontera | `/\Bweb\B/` |

---

## 🧩 Grupos, alternancia y lookarounds

- `(abc)` → grupo de **captura**  
- `(?:abc)` → grupo **sin** captura  
- `a|b` → alternancia (OR)

**Lookarounds** (no consumen caracteres):
- `(?=...)` *lookahead* afirmativo  
- `(?!...)` *lookahead* negativo  
- `(?<=...)` *lookbehind* afirmativo  
- `(?<!...)` *lookbehind* negativo

> *Nota:* `(?<=...)` y `(?<!...)` requieren soporte moderno (Node 12+).

---

## 🧠 Validaciones comunes en el CRUD

### ✅ Nombre (solo letras y espacios, con acentos)
~~~js
const nombreOk = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(nombre);
~~~

### ✅ Email (patrón práctico, no perfecto)
~~~js
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
~~~

## 💌 Validación de Email en JavaScript

La siguiente expresión regular permite validar si un texto tiene formato de **correo electrónico** válido:

~~~js
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
~~~

---

### 🧩 Desglose paso a paso

| Parte del patrón | Significado | Ejemplo |
|------------------|--------------|----------|
| `^` | Indica el **inicio** de la cadena | El texto debe empezar aquí |
| `[^\s@]+` | Uno o más caracteres que **no sean espacios ni @** | “maria”, “juan.lopez”, “user123” |
| `@` | El carácter arroba obligatorio | separa el nombre del dominio |
| `[^\s@]+` | Uno o más caracteres que no sean espacio ni @ | “mail”, “empresa”, “dominio” |
| `\.` | Un punto literal `.` (el `\` lo hace literal) | separa dominio y extensión |
| `[^\s@]+` | Uno o más caracteres válidos (extensión) | “com”, “es”, “org” |
| `$` | Indica el **final** de la cadena | Evita que haya texto extra después |

---

### ✅ Ejemplos válidos
- `maria@mail.com`  
- `juan.lopez@empresa.es`  
- `user123@dominio.co.uk`

---

### ❌ Ejemplos no válidos
| Email | Motivo |
|--------|--------|
| `maria@mail` | Falta el punto y la extensión |
| `maria@@mail.com` | Tiene dos arrobas |
| `maria mail.com` | Tiene un espacio |
| `@mail.com` | Falta la parte antes de la arroba |

---

### 💡 Nota
Validar emails perfectamente con una sola expresión regular es muy complejo (el estándar permite direcciones con símbolos raros, comillas o corchetes).  
Por eso este patrón se usa ampliamente por ser **simple, legible y suficientemente fiable** para la mayoría de formularios o APIs.

---


### ✅ Edad (número ≥ 0)
~~~js
const edadOk = typeof edad === 'number' && Number.isFinite(edad) && edad >= 0;
~~~

---

## 💡 Uso típico en Express (POST de /usuarios)

~~~js
app.post('/usuarios', (req, res) => {
  const { nombre, email, edad } = req.body;

  if (nombre === undefined || email === undefined || edad === undefined) {
    return res.status(400).json({ error: 'Faltan datos obligatorios: nombre, email, edad' });
  }

  if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(nombre)) {
    return res.status(400).json({ error: 'El nombre solo puede contener letras y espacios' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Formato de email inválido' });
  }

  if (typeof edad !== 'number' || !Number.isFinite(edad) || edad < 0) {
    return res.status(400).json({ error: 'La edad debe ser un número mayor o igual a 0' });
  }

  // Crear usuario…
  res.status(201).json({ mensaje: 'Usuario validado correctamente' });
});
~~~

---

## 🧩 Otros patrones útiles

| Caso | Regex | Comentario |
|------|------|------------|
| Entero (≥0) | `^(0|[1-9]\d*)$` | Sin signo, sin ceros a la izquierda (excepto 0) |
| Número con decimales | `^-?\d+(\.\d+)?$` | Punto como separador |
| Fecha simple `AAAA-MM-DD` | `^\d{4}-\d{2}-\d{2}$` | No valida calendario |
| Contraseña mínima | `^(?=.*[A-Za-z])(?=.*\d).{8,}$` | ≥8, 1 letra y 1 dígito |
| UUID v4 | `^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$` | `i` para case-insensitive |

---

## ✅ Buenas prácticas

- **Ancla** tus validaciones completas con `^` y `$`.  
- **No sobrevalides**: patrones demasiado estrictos rompen casos reales.  
- **Expón mensajes claros** en errores `400`.  
- **Separa** validación en middlewares reutilizables.  
- **Prueba** con casos buenos y malos (caja negra).  
- Usa herramientas como **regex101.com** para experimentar.

---

## 📚 Resumen rápido

| Campo   | Regla recomendada | Ejemplo válido |
|---------|-------------------|----------------|
| `nombre` | Letras + espacios | `María López` |
| `email`  | `^[^\s@]+@[^\s@]+\.[^\s@]+$` | `juan@mail.com` |
| `edad`   | Número ≥ 0 | `25` |

---

