let tareas = [];
const regex = /^\S.*\S$/;
function agregarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea:");
    if (!regex.test(tareas )) {
        alert("Error: El nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
    } else {
        tareas.push(nombreTarea);
        alert("Tarea agregada con éxito.");
    }
}

function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let lista = "Lista de tareas:\n";
        for (let i = 0; i < tareas.length; i++) {
            lista += (i + 1) + ". " + tareas[i] + "\n";
        }
        alert(lista);
    }
}


function editarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea a editar:");
    let tareaEncontrada = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i] === nombreTarea) {
            let nombreTareaNueva = prompt("Ingrese el nuevo nombre de la tarea:");
            if (!regex.test(tareas )) {
                alert("Error: El nuevo nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
            } else {
                tareas[i] = nombreTareaNueva;
                alert("Tarea editada con éxito.");
            }
            tareaEncontrada = true;
            break;
        }
    }
    if (!tareaEncontrada) {
        alert("Error: La tarea no se encuentra en la lista.");
    }
}

function eliminarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea a eliminar:");
    nombreTarea = trim(nombreTarea);
    let tareaEncontrada = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i] === nombreTarea) {
            tareas.splice(i, 1);
            alert("Tarea eliminada con éxito.");
            tareaEncontrada = true;
            break;
        }
    }
    if (!tareaEncontrada) {
        alert("Error: La tarea no se encuentra en la lista.");
    }
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción:\n1. Agregar Tarea\n2. Listar Tareas\n3. Editar Tarea\n4. Eliminar Tarea\n5. Salir"));
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                listarTareas();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    } while (opcion !== 5);
}

mostrarMenu();
