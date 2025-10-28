# 🧩 Ejercicio 4 – CRUD Básico con Express

## 🎯 Objetivo
Aprender a crear una API REST sencilla que permita realizar operaciones **CRUD** (Crear, Leer, Actualizar y Borrar) sobre una lista de usuarios almacenada en memoria (sin base de datos).

---

## 🧱 Descripción del ejercicio
Vas a desarrollar una pequeña API con **Node.js** y **Express** que gestione un listado de usuarios.  
Cada usuario tendrá las siguientes propiedades:
- `id` (número)
- `nombre` (texto)
- `email` (texto)
- `edad` (número)

El servidor deberá permitir consultar, añadir, modificar y eliminar usuarios utilizando los métodos HTTP adecuados (GET, POST, PUT y DELETE).

---

## 🚀 Endpoints a implementar

| Método | Ruta | Descripción |
|--------|------|--------------|
| GET | `/usuarios` | Devuelve la lista completa de usuarios |
| GET | `/usuarios/:id` | Devuelve un usuario por su id |
| POST | `/usuarios` | Crea un nuevo usuario |
| PUT | `/usuarios/:id` | Actualiza un usuario existente |
| DELETE | `/usuarios/:id` | Elimina un usuario existente |

> Los datos se almacenarán en un **array** dentro del código, no en una base de datos.

---

## 💡 Recomendaciones
- Empieza con un array de ejemplo, como:
  ```js
  let usuarios = [
    { id: 1, nombre: "María", email: "maria@mail.com", edad: 30 },
    { id: 2, nombre: "Juan", email: "juan@mail.com", edad: 25 }
  ];

## 🧠 Referencia rápida: Métodos de Arrays usados en el CRUD

A continuación se explican los principales **métodos de arrays** utilizados para implementar las operaciones CRUD en memoria antes de conectar con una base de datos.

---

### 🟢 push()

Añade un nuevo elemento al final del array.  
Equivale a la operación **CREATE (POST)**.

```javascript
let usuarios = ["Ane", "Aitor", "Marta"];
usuarios.push("Sara");
console.log(usuarios);

Resultado: ["Ane", "Aitor", "Marta", "Sara"]

### 🔵 find()

Devuelve el primer elemento que cumple la condición indicada.
Equivale a READ (GET por id).
```javascript
let usuarios = [
  { id: 1, nombre: "Ane" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario);

Resultado:
{ id: 2, nombre: "Aitor" }


###🟣 filter()

Devuelve un nuevo array con todos los elementos que cumplen la condición.
Equivale a READ (GET filtrado).
```javascript
let usuarios = [
  { id: 1, nombre: "Aitor" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const filtrados = usuarios.filter(u => u.nombre === "Aitor");
console.log(filtrados);

Resultado:
[
  { id: 1, nombre: "Aitor" },
  { id: 2, nombre: "Aitor" }
]

###🟠 findIndex()

Devuelve la posición (índice) del primer elemento que cumple la condición.
Se utiliza para localizar un elemento antes de actualizarlo (UPDATE) o eliminarlo (DELETE).

```javascript
let usuarios = [
  { id: 1, nombre: "Ane" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const index = usuarios.findIndex(u => u.id === 3);
console.log(index);

Resultado:
2

###🔴 splice()

Permite eliminar, reemplazar o insertar elementos en una posición concreta del array.
Equivale a DELETE (borrar) o UPDATE (reemplazar).

```javascript
let usuarios = ["Ane", "Aitor", "Marta"];
usuarios.splice(1, 1); // elimina 1 elemento desde el índice 1
console.log(usuarios);


Resultado: ["Ane", "Marta"]
