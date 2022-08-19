import express from 'express';
import { Router } from 'express';
import Product from '../src/Product';
import { permissions } from '../middlewares/superadmin';

const router = Router();
const product = new Product('./archivos/productos.json');

router.get("/", async (req, res) => {

    const products = await product.getAll();

    if(products){

        res.json({
            'status':'ok',
            'message' : 'Lista de productos entregada correctamente',
            'code':'200',
            'products': products
        });
    }else{
        res.json({
            'status':'nok',
            'message' : 'No se pudo devolver la lista de productos',
            'code':'400',
            'products': null
        });
    }
});

router.get("/:id", async (req, res) => {

    let product_id:number = parseInt(req.params.id);
    const producto:object = await product.getById(product_id);

    if(producto){

        res.json({
            'status':'ok',
            'message' : 'Producto enviado correctamente',
            'code':'200',
            'product': producto
        });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Producto no encontrado',
            'code':'400',
            'product': null
        });
    }
});

router.post('/', permissions ,async(req, res) => {
    
    const productPost =  req.body;
    const saveProduct = await product.save(productPost);
    
    if(saveProduct){
        res.json({
            'status':'ok',
            'message' : 'Producto guardado correctamente',
            'code':'200',
            'product': saveProduct
        });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al guardar el producto',
            'code':'400',
            'product': null
        });
    }
});

router.put('/:id', permissions , async(req, res) => {

    const productReq =  req.body;
    let product_id:number = parseInt(req.params.id);
    const updateProduct = await product.updateById(product_id, productReq);
    
    if(updateProduct){
        res.json({
            'status':'ok',
            'message' : 'Producto editado correctamente',
            'code':'200',
            'product': updateProduct
        });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al editar el producto',
            'code':'400',
            'product': null
        });
    }
    
});

router.delete('/:id', permissions , async(req, res) => {

    let product_id:number = parseInt(req.params.id);
    const deleteProduct = await product.deleteById(product_id);
    if(deleteProduct){
        res.json({
            'status':'ok',
            'message' : 'Producto Eliminado correctamente',
            'code':'200',
         });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al eliminar el producto',
            'code':'400',
        });
    }
  
});

export default router;

