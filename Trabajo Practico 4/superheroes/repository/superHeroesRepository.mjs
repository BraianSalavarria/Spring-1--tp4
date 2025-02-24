import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import SuperHeroesDataSource from './superheroesDataSourse.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperHeroesRepository extends SuperHeroesDataSource{ 

    constructor() {
        super();
        this.filePath = path.join(__dirname,'../superheroes.txt');
    }

    obtenertodos(){
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data); //convierte el archivo json en un arrray de objetos js
    }
}