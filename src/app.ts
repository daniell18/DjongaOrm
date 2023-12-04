import express from 'express';
import { criaUsuarioControlador, lerUsuarioControler } from './controlador/usuario.controlador';


const app = express();

//comando para criar migrations
// npm run typeorm migration:generate src/migration/CriaçãodaTabelaAjuda -- -d src/data-source
//comando para executar a migration
//npm run typeorm migration:run -- -d src/data-source
app.use(express.json());
app.post('/usuario',criaUsuarioControlador)
app.get('/usuario',lerUsuarioControler)
export {app}