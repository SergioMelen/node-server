const readline = require('readline');

let listaTareas = [{
    id: "1",
    description: "lavar la ropa",
    status: 'Pendiente'
},
{
    id: "2",
    description: "Limpiar la casa",
    status: 'Pendiente' 
}
];

const mostrarTareas = () => {
  console.log(listaTareas);
  return Promise.resolve(listaTareas);
};

const agregarTarea = (description) => {
  return new Promise((resolve) => {
    const id = listaTareas.length > 0 ? (Number(listaTareas[listaTareas.length - 1].id) + 1).toString() : '1';
    const newTask = {
      id: id,
      description: description,
      status: 'Pendiente'
    };
    listaTareas.push(newTask);
    console.log('Tarea agregada:', newTask);
    resolve(newTask);
  });
};

const eliminarTarea = (id) => {
  return new Promise((resolve) => {
    const taskId = id.toString();
    listaTareas = listaTareas.filter(tarea => tarea.id !== taskId);
        resolve(listaTareas);
  });
};

const completarTarea = (id) => {
  return new Promise((resolve, reject) => {
    const taskId = id.toString();
  let tareaCompletada = listaTareas.find(tarea => tarea.id === taskId);
    if (tareaCompletada) {
      tareaCompletada.status = "Completada";
      resolve(tareaCompletada);
    } else {
      console.log('No se encontró la tarea');
      reject('Tarea no encontrada');
    }
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ejecutarComando = async () => {
  rl.question('Elige un comando: (1)mostrar tareas, (2)añadir tarea, (3)completar tarea, (4)Eliminar tarea: ', async (respuesta) => {
    console.log(`Haz elegido ${respuesta}`);

    switch (respuesta) {
      case '1':
        await mostrarTareas();
        break;
      case '2':
        const descripcionTarea = await preguntarDescripcionTarea('Ingrese la descripción de la nueva tarea: ');
        await agregarTarea(descripcionTarea);
        console.log('Tarea agregada con éxito.');
        break;
      case '3':
        const idCompletar = await preguntarDescripcionTarea('Ingrese el id de la tarea que desea completar: ');
        try {
          await completarTarea(Number(idCompletar));
          console.log('Tarea completada con éxito.');
        } catch (error) {
          console.error('Error:', error);
        }
        await mostrarTareas();
        break;
      case '4':
        const idEliminar = await preguntarDescripcionTarea('Ingrese el id de la tarea que desea eliminar: ');
        await eliminarTarea(Number(idEliminar));
        console.log('Tarea eliminada con éxito.');
        await mostrarTareas();
        break;
      default:
        console.log('Comando no reconocido.');
        break;
    }

    const continuar = await preguntarDescripcionTarea('¿Quieres realizar otra operación? (s/n): ');
    if (continuar.toLowerCase() === 's') {
      ejecutarComando();
    } else {
      rl.close();
    }
  });
};

const preguntarDescripcionTarea = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
    });
  });
};

ejecutarComando();
