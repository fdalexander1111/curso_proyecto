const fs = require('fs');
const { DefaultDeserializer } = require('v8');
import Product from '../src/Product';

export default class ShoppingCar{
    
    private archivo: string;

    constructor(archivo:string) {
        
        this.archivo = archivo;

    }

    async save(){
        try {
            const shoppingCarts = await this.getAll();
            let nextId;

            if(!shoppingCarts.length){
                nextId = 1;
            }else{
                const lastItem = shoppingCarts.slice(-1)[0];
                let lastItemId = lastItem.id;
                nextId = lastItemId + 1; 
            }
            const shoppingCart = {
                "id": nextId,
                "timestamp": Date.now(),
                "productos": []
            };
            shoppingCarts.push(shoppingCart);
            const writeFile = await fs.promises.writeFile(this.archivo, JSON.stringify(shoppingCarts));
            return shoppingCart.id;
           
        } catch (error) {
            return false;
        }
    }

    async getAll(){
        try {
            const shoppingCarts = await fs.promises.readFile(this.archivo, 'utf-8');
            const shoppingCartsParse = JSON.parse(shoppingCarts);
            return shoppingCartsParse;

        } catch (error) {
            return false;
        }
    }

    async getById(id:number){
        try {
            const shoppingCarts = await fs.promises.readFile(this.archivo, 'utf-8');
            const shoppingCartsParse = JSON.parse(shoppingCarts);
            let cart = shoppingCartsParse.find((item:any) => item.id == id );
            if(cart){
                return  cart;
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    async deleteById(id:number){
         
        try {
            const cart = await this.getById(id);
            const shoppingCarts = await this.getAll();
            const cartDeleteIndex = shoppingCarts.filter((item:any) => item.id != cart.id);
            const deleteById = await fs.promises.writeFile(this.archivo, JSON.stringify(cartDeleteIndex));  
            
            if(cart){
                return true;
            }else{
                return false;
            }

        } catch (error) {
            return  false;
        }
    }
    
    async getAllProductFromCart(id:number){

        try {
            const shoppingCart = await this.getById(id);
            const products = shoppingCart.productos;
            if(products){
                return products;
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    async saveProduct(id:number, id_prod:number){

        try {
            
            const classProduct = new Product('./archivos/productos.json');
            const product = await classProduct.getById(id_prod);
            if(product){
                const shoppingCarts = await this.getAll()
                const cartIndex = shoppingCarts.findIndex((item:any) => item.id == id);
                if(cartIndex >= 0){

                    shoppingCarts[cartIndex].productos.push(product);
                    const writeFile = await fs.promises.writeFile(this.archivo, JSON.stringify(shoppingCarts));
                }
                return true;

            }else{
                return false;
            }

        } catch (error) {
            
            return false;
        }
    }

    async deleteProduct(id:number, id_prod:number){

        try {

            const shoppingCarts = await this.getAll();
            const cartIndex = shoppingCarts.findIndex((item:any) => item.id == id);
            if(cartIndex >= 0){
                
                const productIndex = shoppingCarts[cartIndex].productos.findIndex((item:any) => item.id == id_prod);
                if(productIndex >= 0){

                    shoppingCarts[cartIndex].productos.splice(productIndex, 1);
                    await fs.promises.writeFile(this.archivo, JSON.stringify(shoppingCarts));  
                }

                return true;

            }
            return false;

        } catch (error) {
            return false;
        }
    }
}