
// funcion para renderizar una tarea en formato JSON
export function renderizarListaTareas(tareas){
    return JSON.stringify(tareas,null,2);
}


//funcion para renderizar un mensaje en formato JSON
export function renderizarMensaje(mensaje){
    return JSON.stringify(mensaje,null,2);
}

//funcion para renderizar una tarea en particular en formato JSON
export function renderizarTarea(tarea){
    return JSON.stringify(tarea,null,2);
}