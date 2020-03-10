import Sequelize  from 'sequelize';

export const connection = new Sequelize(
    'test_db',//db-database
    'test',//user-databse
    'test',//password-database
    {
        host:'postgresql',
        port:'5432',
        dialect :'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        //loggin:false
    }
);

