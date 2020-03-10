import products from '../models/products.model';

export async function createProduct(req,res){   
    const {quantity,name} = req.body;
    let newProduct =  await products.create({
        quantity,
        name
    });
    if(newProduct){
        res.status(200).send({
            success: 'insertado correctamente',
            data: newProduct
        });
    }else{
        res.status(400).send({
            error: 'ocurrio algo inesperado'
        });
    }        
}

export async function listProduct(req,res){
    let listProduct = await products.findAll({raw: true});
    res.status(200).send({
        data: listProduct
    });   
}        