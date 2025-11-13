# 🛣️ Uso de Rutas con Express y `express.Router()`

Guía práctica para organizar una API en varios archivos sin meter todo en `index.js`.

---

## 1. Estructura de carpetas recomendada

proyecto-api/  
 index.js  
 rutas/  
  usuarios.rutas.js  
  productos.rutas.js  

---

## 2. Archivo `index.js`

const express = require('express');  
const app = express();  
const PORT = 3000;

app.use(express.json());

const usuariosRouter = require('./rutas/usuarios.rutas');  
const productosRouter = require('./rutas/productos.rutas');

app.use('/api/usuarios', usuariosRouter);  
app.use('/api/productos', productosRouter);

app.listen(PORT, () => {  
 console.log(`Servidor funcionando en http://localhost:${PORT}`);  
});

---

## 3. Archivo `rutas/usuarios.rutas.js`

const express = require('express');  
const router = express.Router();

let usuarios = [  
 { id: 1, nombre: 'Ana' },  
 { id: 2, nombre: 'Luis' }  
];

router.get('/', (req, res) => {  
 res.json(usuarios);  
});

router.post('/', (req, res) => {  
 const nuevo = req.body;  
 nuevo.id = usuarios.length + 1;  
 usuarios.push(nuevo);  
 res.status(201).json({ mensaje: 'Usuario creado', datos: nuevo });  
});

router.get('/:id', (req, res) => {  
 const id = parseInt(req.params.id);  
 const usuario = usuarios.find(u => u.id === id);  

 if (!usuario) {  
  return res.status(404).json({ error: 'Usuario no encontrado' });  
 }  

 res.json(usuario);  
});

module.exports = router;

---

## 4. Archivo `rutas/productos.rutas.js`

const express = require('express');  
const router = express.Router();

let productos = [  
 { id: 1, nombre: 'Teclado', precio: 20 },  
 { id: 2, nombre: 'Ratón', precio: 10 }  
];

router.get('/', (req, res) => {  
 res.json(productos);  
});

router.post('/', (req, res) => {  
 const nuevo = req.body;  
 nuevo.id = productos.length + 1;  
 productos.push(nuevo);  
 res.status(201).json({ mensaje: 'Producto creado', datos: nuevo });  
});

router.get('/:id', (req, res) => {  
 const id = parseInt(req.params.id);  
 const producto = productos.find(p => p.id === id);  

 if (!producto) {  
  return res.status(404).json({ error: 'Producto no encontrado' });  
 }  

 res.json(producto);  
});

module.exports = router;

---

## 5. ¿Cómo funciona todo junto?

- Las rutas de `usuarios.rutas.js` funcionan bajo `/api/usuarios`.  
- Las rutas de `productos.rutas.js` funcionan bajo `/api/productos`.  
- Para crear otra colección:  
 1. Crear archivo en `rutas/`.  
 2. Crear `router`.  
 3. Añadir rutas.  
 4. Exportarlo.  
 5. Importarlo en `index.js` con `app.use()`.

---

## 6. Resumen rápido

Para usar `express.Router()` necesitas:

1. const express = require('express');  
2. const router = express.Router();  
3. Definir rutas: router.get(), router.post(), router.put(), router.delete()  
4. module.exports = router;  
5. En index.js → app.use('/api/loquesea', routerImportado);

---

## 7. Referencias útiles

https://expressjs.com/en/guide/routing.html  
https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs  
https://www.w3schools.com/nodejs/nodejs_express.asp

