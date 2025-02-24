import SuperHeroesRepository from '../repository/superHeroesRepository.mjs'

const repository = new SuperHeroesRepository();

export function obtenerSuperheroePorId(id){
    const superheroes = repository.obtenertodos();
    return superheroes.filter(hero => hero.id === id);
}

export function buscarSuperheroePorAtributo(atributo, valor){
    const superheroes = repository.obtenertodos();
    return superheroes.filter(hero => String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()) );

}

export function obtenerSuperheroesMayoresDe30(){
    const superheroes = repository.obtenertodos();
    return superheroes.filter(hero => hero.edad > 30 && hero.poder.length >= 2);
}