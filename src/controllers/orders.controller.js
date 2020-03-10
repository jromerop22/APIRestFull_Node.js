import orders from '../models/orders.model';
import client from '../models/client.model';
import products from '../models/products.model';
import driver from '../models/driver.model';

export async function createOrder(req,res){   
    const {clientid,deliveraddress,deliverdate,delivertime,productid} = req.body;
    let newOrder =  await orders.create({
        clientid,
        deliveraddress,
        deliverdate,
        delivertime,
        productid,
        driver: Math.floor(Math.random() * 5)        
    });
    if(newOrder){
        res.status(200).send({
            success: 'insertado correctamente',
            data: newOrder
        });
    }else{
        res.status(400).send({
            error: 'ocurrio algo inesperado'
        });
    }        
}

export async function listOrder(req,res){
    let newOrder = await orders.findAll({
        include: [client,products,driver],
        attributes: ['orderid', 'deliveraddress','deliverdate','delivertime']
    });
    res.status(200).send({
        data: newOrder
    });   
}        

export async function listWorkDay(req,res){          
    let {driverid} = req.params;
    let date = new Date(req.query.date || new Date());
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        
    let newOrder = await orders.findAll({
        where:{    
            deliverdate:date,  
            driverid
        },
        include: [
            {
                model: client,
                attributes: ['name', 'lastname', 'email','address','phone']
            },{
                model: products,
                attributes: ['name']
            }
        ],
        attributes: {
            exclude: ['driverid', 'clientid', 'productid']
        },
        raw: true
    });
    res.status(200).send({
        data: newOrder
    });   
}        
