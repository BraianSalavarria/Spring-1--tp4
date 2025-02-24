import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import TareaDataSourse from './TareasDataSourse.mjs';
import Tarea from '../models/tarea.mjs'


//obtenemos la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, './tareas.txt');

//implementacions
export default class TareaRepository extends TareaDataSourse{
    constructor(){
        super(); //llamamos al constructor de la clase
    }

    //implementacion del metodo obtener todas()
    obtenerTodas(){

        try{
            //leemos el archivo en formato utf8
            const data = fs.readFileSync(filePath, 'utf8');
            //contimos el contenido del archivo en un arrat de objetos JSON
            const tareas = JSON.parse(data);
            // convertimos a cada elemento del array de tareas en un objeto de la clase Tarea
            
            return tareas.map(tareaData => new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));
        }catch (error){
            //si ocurre un error:
            console.error('error al tratar de leer el archivo de tareas:', error)
            return[];
        }

    }


    // implementacion del metodo guardar
    guardar(tareas){
        try{
            //convertimos el array de tareas en una cadeja JSON con identacion de 2 espacios
            const data = JSON.stringify(tareas, null, 2);
            //guardamos la cadena JSON en el archivo de texto
            fs.writeFileSync(filePath, data, 'utf8');
        }catch(error){
            console.error('Error al guardar las tareas:', error);
        }
    }


    //implementacion del metodo eliminar()
    eliminar(id){
        try{
            const tareas = this.obtenerTodas(); //obtenemos todas las tareas
            //filtramos por ID
            const tareasActualizadas = tareas.filter(tarea => tarea.id !==id)
            this.guardar(tareasActualizadas);
        }catch(error){
            console.error('Error al eliminar tarea:', error);
        }
    }







}    