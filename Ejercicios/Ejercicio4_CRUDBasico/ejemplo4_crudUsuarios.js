// Ejemplo de operaciones básicas con arrays en JavaScript
// Métodos: push, find, filter, findIndex

let usuarios = [
  { id: 1, nombre: "Ane" },
  { id: 2, nombre: "Aitor" },
  { id: 3, nombre: "Marta" }
];
//Mostrar todos los usuarios -->GET
console.log("Estado inicial:", JSON.stringify(usuarios));

//Crear un nuevo usuario -->POST
// Método: push() → añade un elemento al final del array
usuarios.push({ id: 4, nombre: "Sara" });
console.log("CREATE → push:", JSON.stringify(usuarios));

//Obtener un usuario por su id (find)
//Método: find() → devuelve el primer elemento que cumple la condición
const usuario = usuarios.find((u) => u.id === 2);
console.log("READ → find:", JSON.stringify(usuario));

// Filtrar varios resultados
// Método: filter() → devuelve un NUEVO array con los que cumplen la condición
//Obtener todos los usuarios con el nombre "Aitor" (filter)
const usersAitor = usuarios.filter((u) => u.nombre === "Aitor");
console.log("READ → filter:", JSON.stringify(usersAitor));

//Borrar un usuario por su id (findIndex)
const index = usuarios.findIndex((u) => u.id === 2);
if (index !== -1) {
  usuarios.splice(index, 1);
  console.log("DELETE → findIndex:", JSON.stringify(usuarios));
}
