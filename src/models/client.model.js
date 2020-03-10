import Sequelize from 'sequelize';
import { connection } from '../database/conection.postgres';

//modelo cliente
const client = connection.define('client',{
    clientid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.TEXT
    },
    lastname:{
        type: Sequelize.TEXT
    },
    email:{
        type: Sequelize.TEXT
    },
    address:{
        type: Sequelize.TEXT
    },
    phone:{
        type: Sequelize.INTEGER
    }
},{
    freezeTableName: true,      
    timestamps: false
});

export default client;