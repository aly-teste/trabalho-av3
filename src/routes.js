import { Router } from 'express';


import ContatosController from './app/controllers/ContatosController';

const routes = new Router();

routes.get('/contatos', ContatosController.index);
routes.get('/contatos/:id', ContatosController.findById);
routes.post('/contatos', ContatosController.store);
routes.put('/contatos/:id',ContatosController.update);
routes.delete('/contatos/:id',ContatosController.delete);


export default routes;
