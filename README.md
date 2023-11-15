¿Qué sucedió al usar async y await?
Al utilizar async y await, el código se puedo ejecutar de manera más secuencial, lo que mejoro la legibilidad. Las funciones que contienen operaciones asíncronas se marcan con async, y las operaciones asíncronas se manejan de manera similar a las operaciones síncronas.

¿Qué sucedió al usar el método then()?
Al utilizar el método then(), se encadenaban las promesas para manejar las operaciones asíncronas. Cada then() se ejecutaba después de que la promesa anterior se resolviera. En el código anterior, pude haber dejado .then() para manejar las promesas devueltas por las funciones agregarTarea, eliminarTarea, etc.

¿Qué diferencias encontraste entre async, await y el método then()?
La principal diferencia es la sintaxis y la estructura del código. Con async y await, el código es más lineal y se asemeja a la programación síncrona, lo que facilita la lectura y el mantenimiento. En cambio, el método then() puede conducir a un código más anidado, especialmente cuando se encadenan varias operaciones asíncronas.
Con async y await, se puede utilizar un enfoque más estructurado, manejando errores con bloques try...catch, lo que mejora la gestión de errores en comparación con el manejo de errores mediante catch() en el método then().
