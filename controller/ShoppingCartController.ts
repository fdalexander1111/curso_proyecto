import { shoppingCartDao  } from '../src/daos/index';
import { Document, Types } from "mongoose";
import { productDao  } from '../src/daos/index';


export async function getAll(req:any , res:any){

    try {
        const shoppingCart = await shoppingCartDao.getAll();
        if(shoppingCart){

            res.json({
                'status':'ok',
                'message' : 'Carrito de compras enviado correctamente',
                'code':'200',
                'shoppingCart': shoppingCart
            });
        }else{
            res.status(400).json({
                'status':'nok',
                'message' : 'No se encontraron el carrito de compras',
                'code':'400',
                'shoppingCart': null
            });
        }
   
    } catch (error:any) {
        res.json({error: error.message});
    }

}

export async function getById(req:any , res:any){
    
    try {

        let shoppingCart_id:any = new Types.ObjectId(req.params.id);
        const shoppingCart:object = await shoppingCartDao.getById(shoppingCart_id);

        if(shoppingCart){

            res.json({
                'status':'ok',
                'message' : 'Carrito enviado correctamente',
                'code':'200',
                'shoppingCart': shoppingCart
            });
        }else{
            res.status(400).json({
                'status':'nok',
                'message' : 'carrito no encontrado',
                'code':'400',
                'shoppingCart': null
            });
        }
        
    } catch (error:any) {

        res.status(400).json({error: error.message});
    }
}

export async function save(req:any , res:any){

    try {

        const shoppingCart = req.body;
        const result = await shoppingCartDao.save(shoppingCart);

        if(result){

            res.json({
                'status':'ok',
                'message' : 'Se salvo corretamente el carrito de compras',
                'code':'200',
                'result': result
            });
        }else{
            res.status(400).json({
                'status':'nok',
                'message' : 'No se pudo salvar los datos del carrito',
                'code':'400',
                'result': null
            });
        }
        
    } catch (err : any) {

        res.status(400).json({error: err.message});
    }
    
}


export async function deleteById(req:any , res:any){


    try {
        
        let shoppingCart_id:any = new Types.ObjectId(req.params.id);
        const deleteItem = await shoppingCartDao.deleteById(shoppingCart_id);
        if(deleteItem){
            res.json({
                'status':'ok',
                'message' : 'Carrito de compras Eliminado correctamente',
                'code':'200',
            });
        }else{
            res.status(400).json({
                'status':'nok',
                'message' : 'No se elimino o no se encontro el carrito de compras',
                'code':'400',
            });
        }
    } catch (error:any) {
        res.status(400).json({error: error.message});
    }

}

export async function getAllProducts(req:any , res:any){

    try {
        
        let shoppingCart_id:any = new Types.ObjectId(req.params.id);
        const shoppingCart:any = await shoppingCartDao.getById(shoppingCart_id);
        const products = shoppingCart.productos;
     
        if(products){

            res.json({
                'status':'ok',
                'message' : 'Se envio correctamente la lista de productos',
                'code':'200',
                'result': products
            });
        }else{
            res.status(400).json({
                'status':'nok',
                'message' : 'No se pudo enviar la lista de productos del carrito',
                'code':'400',
                'result': null
            });
        }

    } catch (error:any) {
        
        res.status(400).json({error: error.message});
    }
}

export async function saveProduct(req:any , res:any){

    try {
        
        let cart_id:object = new Types.ObjectId(req.params.id);
        let prod_id:object = new Types.ObjectId(req.body.id);
        const product:object = await productDao.getById(prod_id);
        const shoppingCart:any = await shoppingCartDao.getById(cart_id);
        const saveProduct = await shoppingCart.product.save(product);

        if(saveProduct){
            res.json({
                'status':'ok',
                'message' : 'El producto se agrego correctamente al carrito',
                'code':'200',
            });
        }else{
            res.json({
                'status':'nok',
                'message' : 'Error al agregar un producto al carrito',
                'code':'400',
            });
        }
     
    } catch (error:any) {
        
        res.status(400).json({error: error.message});
    }
}
