import {listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea} from '../services/tareaService.mjs'
import {renderizarListaTareas, renderizarMensaje } from '../views/tareaVista.mjs'

//controlador para listar todas las tareas
export function listarTareasController(req, res){
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

//controlador para listar solo las tareas completadas
export function listarTareasCompletadasController(req, res){
    const tareasCompletadas = listarTareasCompletadas();
    res.send(renderizarListaTareas(tareasCompletadas));
}

//controlador para crear una nueva tarea
export function crearTareaController(req, res){
    const {id, titulo, descripcion, completado} = req.body;
    crearTarea(id, titulo, descripcion, completado);
    console.log(req.body);
    res.send(renderizarMensaje('Tarea creado con exito'));
}

//controlador para marcar tarea como completada
export function completarTareaController(req, res){
    const { id } = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como pletada'))
}

//controlador para eliminar una tarea
 export function eliminarTareaController(req, res){
    const { id } = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada con exito'))
}