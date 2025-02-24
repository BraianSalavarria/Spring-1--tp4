import TareaRepository from '../repository/TareaRepository.mjs'
import Tarea from '../models/tarea.mjs'

//creamos un instancia del repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

export function listarTareas(){
    //obtenemos todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

//obtenemos todas las tareas completadas
export function listarTareasCompletadas() {
    //obtenemos todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    return tareas.filter(tarea => tarea.completado );
}

//creacion de una nueva tarea
export function crearTarea(id, titulo, descripcion, completado= false){
    const tareas = tareaRepo.obtenerTodas();
    //creamos la instacion de una nueva tarea
    const nuevaTarea = new Tarea(id,titulo,descripcion,completado);
    //validamos que una tarea tenga un titulo
    nuevaTarea.validar();
    //añadimos la tarea a la lista de tareas
    tareas.push(nuevaTarea);
    //guardamos todas las tareas
    tareaRepo.guardar(tareas);
}

//marcar una tarea como completada
export function completarTarea(id){
    //obtenemos todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    //encuentra la tarea por su ID
    const tarea = tareas.find(tarea => tarea.id === id);
    //si existe la tarea, la marcamos como completada
    if(tarea){
        tarea.completar();
        //guardamos la tarea en el archivo
        tareaRepo.guardar(tareas);
    }
}

//eliminacion de una tarea
export function eliminarTarea(id){
    //obtenemos todas las tareas
    let tareas = tareaRepo.obtenerTodas();
    //eliminamos una tarea a traves de su id
    tareas = tareas.filter(tarea => tarea.id !== id);
    //guardamos las tareas actualizadas
    tareaRepo.guardar(tareas);
}