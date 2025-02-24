import express from 'express'
import {listarTareasController, listarTareasCompletadasController,
        crearTareaController, completarTareaController,
        eliminarTareaController
        } from './controllers/controllers.mjs'

const app = express();
const PORT = 3000;

//mildware para permitir el manejo de solicitdes
app.use(express.json());

app.get('/tareas', listarTareasController);
app.get('/tareas/completadas', listarTareasCompletadasController);
app.post('/tareas/', crearTareaController);
app.put('/tareas/:id/completar', completarTareaController);
app.delete('/tareas/:id', eliminarTareaController);


//iniciamos el servidor
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en: http://localhost:${PORT}`);
});