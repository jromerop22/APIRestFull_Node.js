//importacion librerias
import express  from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

//importacion rutas
import routerOrders from './routes/orders.router';
import routerProducts from './routes/products.router';
import routerClient from './routes/client.router';

const app = express();
const port  = process.env.PORT || 3001;

//REST log
app.use(morgan('dev'));
//entedimiento de JSON 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.use('/order',routerOrders);
app.use('/product',routerProducts);
app.use('/client',routerClient);

app.listen(port,()=>{
    console.log('API REST Run : '+ port);
})