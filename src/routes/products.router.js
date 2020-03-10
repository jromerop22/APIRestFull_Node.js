import { Router } from 'express';
import * as controller from '../controllers/products.controller';
const routerProducts = Router();

//enrutamiento para Pedidos
routerProducts.post('/', controller.createProduct); 
routerProducts.get('/', controller.listProduct); 

export default routerProducts;