import client from '../models/client.model';

export async function createClient(req,res){   
    const {name,lastname,email,address,phone} = req.body;
    let newClient =  await client.create({
        name,
        lastname,
        email,
        address,
        phone
    });
    if(newClient){
        res.status(200).send({
            success: 'insertado correctamente',
            data: newClient
        });
    }else{
        res.status(400).send({
            error: 'ocurrio algo inesperado'
        });
    }        
}

export async function listClient(req,res){
    let newClient = await client.findAll({raw: true});
    res.status(200).send({
        data: newClient
    });   
}        