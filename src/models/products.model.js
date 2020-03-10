import Sequelize from 'sequelize';
import { connection } from '../database/conection.postgres';

//modelo Productos
const products = connection.define('products',{
    productid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps :false    
});


export default products;