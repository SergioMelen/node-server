const readline = require('readline');

let listaTareas = [];
const mostrarTareas = () =>{
    console.log(listaTareas);
}
const agregarTarea = (id, description) => {
    let newTask = {
        id: id,
        description: description,
        isCompleted: false
    };
    listaTareas.push(newTask)
    return newTask;
};

console.log(agregarTarea(1, "Entregar el proyecto"));
console.log(agregarTarea(2, "Hacer oficio"));

const eliminarTarea = (id) => {
    listaTareas = listaTareas.filter(tarea => tarea.id !== id);
    return listaTareas;
};

const completarTarea = (id) => {
    let tareaCompletada = listaTareas.find(tarea => tarea.id == id);
    if(tareaCompletada){
      tareaCompletada.isCompleted = true;
    } 
    return listaTareas
};


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Elige un comando: (1)mostrar tareas , (2)añadir tarea, (3)completar tarea, (4)Eliminar tarea', (respuesta) => {
     
    console.log(`Haz elegido ${respuesta}`)

    switch (respuesta) {
       case '1':
           console.log(mostrarTareas())
           break;
           case '2':
               rl.question('Ingrese el ID de la nueva tarea: ', (id) => {
                   rl.question('Ingrese la descripción de la nueva tarea: ', (description) => {
                         agregarTarea(id, description, isCompleted = false);
                           console.log('Tarea agregada con éxito.', listaTareas);
                           rl.close();
                       
                   });
               });
           break;
       case '3':
           rl.question('ingrese el id de la tarea que desea completar: ', (id)=> {
            
               completarTarea( id );
               console.log('Tarea completada con éxito.');
               mostrarTareas()
               rl.close();
           });
           break;
       case '4':
           rl.question('ingrese el id de la tarea que desea eliminar: ', (id)=> {
            const number = Number(id)
               eliminarTarea( number );
               console.log('Tarea elimanada con éxito.');
               mostrarTareas();
               rl.close();            
          });
          break;
          default:
           console.log('Comando no reconocido.');
           rl.close();
           break;
   }});



