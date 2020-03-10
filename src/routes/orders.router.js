import { Router } from 'express';
import * as controller from '../controllers/orders.controller';
const routerOrders = Router();

//enrutamiento para Pedidos
routerOrders.post('/', controller.createOrder); 
routerOrders.get('/', controller.listOrder); 
routerOrders.get('/listday/:driverid', controller.listWorkDay); 
export default routerOrders;