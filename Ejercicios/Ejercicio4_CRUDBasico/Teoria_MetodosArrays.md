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
```

**Resultado:**
```javascript
["Ane", "Aitor", "Marta", "Sara"]
```

---

### 🔵 find()

Devuelve el primer elemento que cumple la condición indicada.  
Equivale a **READ (GET por id)**.

```javascript
let usuarios = [
  { id: 1, nombre: "Ane" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario);
```

**Resultado:**
```javascript
{ id: 2, nombre: "Aitor" }
```

---

### 🟣 filter()

Devuelve un nuevo array con todos los elementos que cumplen la condición.  
Equivale a **READ (GET filtrado)**.

```javascript
let usuarios = [
  { id: 1, nombre: "Aitor" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const filtrados = usuarios.filter(u => u.nombre === "Aitor");
console.log(filtrados);
```

**Resultado:**
```javascript
[
  { id: 1, nombre: "Aitor" },
  { id: 2, nombre: "Aitor" }
]
```

---

### 🟠 findIndex()

Devuelve la posición (índice) del primer elemento que cumple la condición.  
Se utiliza para localizar un elemento antes de **actualizarlo (UPDATE)** o **eliminarlo (DELETE)**.

```javascript
let usuarios = [
  { id: 1, nombre: "Ane" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
const index = usuarios.findIndex(u => u.id === 3);
console.log(index);
```

**Resultado:**
```javascript
2
```

---

### 🔴 splice()

Permite eliminar, reemplazar o insertar elementos en una posición concreta del array.  
Equivale a **DELETE (borrar)** o **UPDATE (reemplazar)**.

```javascript
let usuarios = ["Ane", "Aitor", "Marta"];
usuarios.splice(1, 1); // elimina 1 elemento desde el índice 1
console.log(usuarios);
```

**Resultado:**
```javascript
["Ane", "Marta"]
```
