export default class TareaDataSourse{ 
    
    //metodo abstracto para obtener todas las tareas
    obtenerTodas(){
        throw new Error('Este metodo debe ser implementdado por la subclase');
    }
    
    //metodo abstracto para guardar todas las tareas
    guardar(tareas){
        throw new Error('Este metodo debe ser implementdado por la subclase');
    }

        //metodo abtracto para eliminar una tarea por id
    eliminar(id){
        throw new Error('Este metodo debe ser implementdado por la subclase');
    }

}