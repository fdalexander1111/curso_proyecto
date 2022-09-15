import { productDao  } from '../src/daos/index';
import { Document, Types } from "mongoose";


    export async function getAll(req:any , res:any){

        try {
            const products = await productDao.getAll();
            if(products){
    
                res.json({
                    'status':'ok',
                    'message' : 'Lista de productos enviada correctamente',
                    'code':'200',
                    'products': products
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'No se encontraron productos',
                    'code':'400',
                    'products': null
                });
            }
       
        } catch (error:any) {
            res.json({error: error.message});
        }

    }

    export async function getById(req:any , res:any){
        
        try {

            let product_id:any = new Types.ObjectId(req.params.id);
            const producto:object = await productDao.getById(product_id);
    
            if(producto){
    
                res.json({
                    'status':'ok',
                    'message' : 'Producto enviado correctamente',
                    'code':'200',
                    'product': producto
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'Producto no encontrado',
                    'code':'400',
                    'product': null
                });
            }
            
        } catch (error:any) {

            res.status(400).json({error: error.message});
        }
    }

    export async function save(req:any , res:any){

        try {

            const product = req.body;
            const result = await productDao.save(product);

            if(result){

                res.json({
                    'status':'ok',
                    'message' : 'Lista de productos entregada correctamente',
                    'code':'200',
                    'result': result
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'No se pudo devolver la lista de productos',
                    'code':'400',
                    'result': null
                });
            }
            
        } catch (err : any) {

            res.status(400).json({error: err.message});
        }
        
    }
    export async function updateById(req:any , res:any){

        try {
            
            const productReq =  req.body;
            let product_id:any = new Types.ObjectId(req.params.id);
            const updateProduct = await productDao.updateById(product_id, productReq);
            
            if(updateProduct){
                res.json({
                    'status':'ok',
                    'message' : 'Producto editado correctamente',
                    'code':'200',
                    'product': updateProduct
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'Error al editar el producto',
                    'code':'400',
                    'product': null
                });
            }

        } catch (error: any) {
             res.status(400).json({error: error.message});
        }

    }

    export async function deleteById(req:any , res:any){


        try {
            
            let product_id:any = new Types.ObjectId(req.params.id);
            const deleteProduct = await productDao.deleteById(product_id);
            if(deleteProduct){
                res.json({
                    'status':'ok',
                    'message' : 'Producto Eliminado correctamente',
                    'code':'200',
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'No se elimino o no se encontro el producto',
                    'code':'400',
                });
            }
        } catch (error:any) {
            res.status(400).json({error: error.message});
        }

    }


