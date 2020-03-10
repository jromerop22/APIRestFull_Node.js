import { Router } from 'express';
import * as controller from '../controllers/client.controller';
const routerClient = Router();

//enrutamiento para Pedidos
routerClient.post('/', controller.createClient); 
routerClient.get('/', controller.listClient); 

export default routerClient;