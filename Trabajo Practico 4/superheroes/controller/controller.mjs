import {obtenerSuperheroePorId, buscarSuperheroePorAtributo, obtenerSuperheroesMayoresDe30} from '../service/superheroesService.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/superheroesView.mjs';

export function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if (superheroe){
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({mensaje: "superheroe no encontrado"});
    }
}

export function buscarSuperheroePorAtributoController(req,res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroePorAtributo(atributo, valor);

    if (superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({mensaje: "No se encontraron superheores con ese atributo" });
    }
}

    export function obtenerSuperheroesMayoresDe30Controller(req,res){
        const superheores = obtenerSuperheroesMayoresDe30();
        res.send(renderizarListaSuperheroes(superheores));
    }