# 🧩 Actividad 02 – API REST con relaciones (Usuarios y Pedidos)

## 🎯 Objetivo  
Ampliar la práctica anterior creando una API REST que gestione **dos recursos relacionados**:  
**usuarios** y **pedidos**, utilizando **Express** y **arrays en memoria**.

Aprenderás a:  
- Crear rutas anidadas (`/usuarios/:id/pedidos`).  
- Usar parámetros de ruta (`req.params`).  
- Filtrar datos con métodos de arrays como `.find()`, `.filter()`, `.push()` y `.splice()`.  
- Devolver respuestas con los códigos HTTP adecuados.

---

## 🧱 Descripción del ejercicio  
Partiendo del código de la **Ficha 5 (CRUD básico con Express y array en memoria)**, crea una nueva aplicación que permita gestionar usuarios y sus pedidos.

Cada **usuario** tendrá:
- `id`
- `nombre`
- `email`

Cada **pedido** tendrá:
- `id`
- `usuarioId`
- `producto`
- `cantidad`

Comienza con estos datos de ejemplo:

```js
const usuarios = [
  { id: 1, nombre: "Ane",   email: "ane@example.com" },
  { id: 2, nombre: "Aitor", email: "aitor@example.com" },
];

const pedidos = [
  { id: 1, usuarioId: 1, producto: "Ratón inalámbrico", cantidad: 2 },
  { id: 2, usuarioId: 1, producto: "Teclado mecánico",  cantidad: 1 },
  { id: 3, usuarioId: 2, producto: "Monitor 24\"",      cantidad: 1 },
];

