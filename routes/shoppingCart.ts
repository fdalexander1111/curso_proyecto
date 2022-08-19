import express from 'express';
import { Router } from 'express';
import Cart from '../src/ShoppingCart';

const router = Router();
const cart = new Cart('./archivos/shoppingCart.json');

router.post('/', async (req, res) => {
    
    const cartPost =  req.body;
    const saveCart = await cart.save();
    
    if(saveCart){
        res.json({
            'status':'ok',
            'message' : 'Carrito creado correctamente',
            'code':'200',
            'id': saveCart
        });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al crear el carrito',
            'code':'400',
            'id': null
        });
    }
});

router.delete('/:id', async (req, res) => {

    let cart_id:number = parseInt(req.params.id);
    const deleteCart = await cart.deleteById(cart_id);
    if(deleteCart){
        res.json({
            'status':'ok',
            'message' : 'El carrito fue Eliminado correctamente',
            'code':'200',
         });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al eliminar el carrito',
            'code':'400',
        });
    }
  
});

router.get('/:id/productos', async (req, res) => {

    let cart_id:number = parseInt(req.params.id);
    const products:any = await cart.getAllProductFromCart(cart_id);
    if(products){
        res.json({
            'status':'ok',
            'message' : 'Los productos del carrito se enviarón correctamente',
            'code':'200',
            'products': products
         });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al enviar los productos del carrito',
            'code':'400',
            'products': null
        });
    }
  
});

router.post('/:id/productos', async (req, res) => {

    let cart_id:number = parseInt(req.params.id);
    let prod_id:number = parseInt(req.body.prod_id);
    const addProducts:any = await cart.saveProduct(cart_id,prod_id);
    if(addProducts){
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
  
});

router.delete('/:id/productos/:id_prod', async (req, res) => {

    let cart_id:number = parseInt(req.params.id);
    let prod_id:number = parseInt(req.params.id_prod);
    const deleteProducts:any = await cart.deleteProduct(cart_id,prod_id);
    if(deleteProducts){
        res.json({
            'status':'ok',
            'message' : 'El producto se elimino correctamente al carrito',
            'code':'200',
         });
    }else{
        res.json({
            'status':'nok',
            'message' : 'Error al eliminar un producto al carrito',
            'code':'400',
        });
    }
  
});


export default router;

