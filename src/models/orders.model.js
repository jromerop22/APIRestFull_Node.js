import Sequelize from 'sequelize';
import { connection } from '../database/conection.postgres';
import client from './client.model';
import products from './products.model';
import driver from './driver.model';

//modelo Pedido
const orders = connection.define('orders',{
    orderid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientid: {
        type: Sequelize.INTEGER,
    },
    productid: {
        type: Sequelize.INTEGER
    },
    driverid: {
        type: Sequelize.INTEGER
    },
    deliveraddress:{
        type: Sequelize.TEXT
    },
    deliverdate:{
        type: Sequelize.DATE
    },
    delivertime:{
        type: Sequelize.TIME
    }  
},{
    timestamps :false
});

//uno a muchos
driver.hasMany(orders,{foreignKey:'driverid',sourceKey:'driverid'});
orders.belongsTo(driver,{foreignKey:'driverid',sourceKey:'driverid'});

client.hasMany(orders,{foreignKey:'clientid',sourceKey:'clientid'});
orders.belongsTo(client,{foreignKey:'clientid',sourceKey:'clientid'});

products.hasMany(orders,{foreignKey:'productid',sourceKey:'productid'});
orders.belongsTo(products,{foreignKey:'productid',sourceKey:'productid'});

export default orders;