Crea un archivo llamado ejemplo04_miniApi.js que monte un servidor con Express y defina tres rutas distintas:

1️⃣ Ruta /saludo/:nombre/:edad

Debe recibir un nombre y una edad como parámetros de ruta y devolver un mensaje de saludo personalizado.

📍Ejemplo de llamada:

http://localhost:3000/saludo/Ane/40


📤 Respuesta esperada (texto plano):

Hola Ane tienes 40 años, ¡Te doy la bienvenida al servidor Express!

2️⃣ Ruta /operacion/:a/:b

Recibe dos números como parámetros y realiza las cuatro operaciones básicas: suma, resta, multiplicación y división.
Si alguno de los valores no es numérico, el servidor debe devolver un error 400.

📍Ejemplo de llamada:

http://localhost:3000/operacion/10/5


📤 Respuesta esperada (texto plano):

Suma: 15
Resta: 5
Multiplicación: 50
División: 2.00


💡 Opcional: Puedes modificar el código para que la respuesta se devuelva en formato JSON en lugar de texto plano.

3️⃣ Ruta /buscar

Debe utilizar parámetros de consulta (query strings) para simular una búsqueda.
Si falta alguno de los parámetros (categoria o articulo), el servidor debe devolver un error 400.

📍Ejemplo de llamada:

http://localhost:3000/buscar?categoria=ropa&articulo=camiseta


📤 Respuesta esperada:

Buscando camiseta en la categoría ropa.
