import Sequelize from 'sequelize';
import { connection } from '../database/conection.postgres';

//modelo Controlador
const driver = connection.define('driver',{
    driverid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    name: {
        type: Sequelize.TEXT
    }
},{
    freezeTableName: true,  
    timestamps :false
});


export default driver;