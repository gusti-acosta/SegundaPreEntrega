function tarea(nombre, estado, descripcion){
    this.nombre = nombre;
    this.estado = estado;
    this.descripcion = descripcion;
}


const tareas = []

function agregarTarea () {
    const nombre = document.getElementById('tareaNombre').value;
    const descripcion = document.getElementById('tareaDescripcion').value;
    const nuevaTarea = new tarea(nombre, descripcion, 'pendiente');
    tareas.push(nuevaTarea);
    actualizarListaTareas();
}
function eliminarTarea() {
    const nombre = document.getElementById('tareaNombre').value;
    const tareaIndex = tareas.findIndex(tarea => tarea.nombre === nombre);
    if (tareaIndex !== -1){
        tareas.splice(tareaIndex, 1)
        actualizarListaTareas();
    }
    else {
        alert(`No se encontró ninguna tarea con el nombre "${nombre}".`);
    }
}

function actualizarEstadoTarea() {
    const nombre = document.getElementById('tareaNombre').value;
    const nuevoEstado = document.getElementById('tareaEstado').value;
    const tareaa = tareas.find(tarea => tarea.nombre === nombre);
    if (tareaa) {
        tareaa.estado = nuevoEstado;
        actualizarEstadoTarea();
    } else {
        alert(`No se encontró ninguna tarea con el nombre "${nombre}".`);
    }
}

function actualizarListaTareas() {
        const tareasList = document.getElementById('tareas');
        tareasList.innerHTML = ''; 
        tareas.forEach(tarea => {
            const listItem = document.createElement('li');
            listItem.textContent = `Nombre: ${tarea.nombre}, Descripción: ${tarea.nombre}, Estado: ${tarea.estado}`;
            tareasList.appendChild(listItem);
        });
    }

function buscarTareaPorNombre() {
    const nombre = document.getElementById('trabajoNombre').value;
    const tareaEncontrada = tareas.filter(tarea => tarea.nombre === nombre);
    if (tareaEncontrada.length > 0) {
        alert(`Tareas encontradas con el nombre "${nombre}":\n${JSON.stringify(tareaEncontrada)}`);
    } else {
        alert(`No se encontró ninguna tarea con el nombre "${nombre}".`);
    }
}

function filtrarTareasPorEstado() {
    const estado = document.getElementById('tareaNombre').value;
    const tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
    if (tareasFiltradas.length > 0) {
        alert(`Tareas con estado "${estado}":\n${JSON.stringify(tareasFiltradas)}`);
    } else {
        alert(`No se encontraron tareas con el estado "${estado}".`);
    }
}
