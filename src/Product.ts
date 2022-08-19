const fs = require('fs');
const { DefaultDeserializer } = require('v8');

export default class Product {
    
  private archivo: string;

  constructor(archivo:string) {
     
    this.archivo = archivo;
 
  }

    async save(product:any){
        try {
            const products = await this.getAll();
            let nextId;

            if(!products.length){
                nextId = 1;
            }else{
                const lastProduct = products.slice(-1)[0];
                let lastProductId = lastProduct.id;
                nextId = lastProductId + 1; 
            }
            product['id'] = nextId;
            product['precio'] = parseInt(product['precio']);
            product['timestamp'] = Date.now();
            product['stock'] = parseInt(product['stock']);
            products.push(product);
            const writeFile = await fs.promises.writeFile(this.archivo, JSON.stringify(products));
            return product;
           
        } catch (error) {
            return false;
        }
    }

    async getById(id:number){
        try {
            
            const productos = await fs.promises.readFile(this.archivo, 'utf-8');
            const productosParse = JSON.parse(productos);
            let producto = productosParse.find((item:any) => item.id == id );
            if(producto){
                return  producto;
            }else{
                return false;
            }
       
        } catch (error) {
            return false;
        }
    }

    async getAll(){
        try {
            const productos = await fs.promises.readFile(this.archivo, 'utf-8');
            const productosParse = JSON.parse(productos);
            
            return productosParse;

        } catch (error) {
            return false;
        }
    }

    async deleteById(id:number){
         
        try {
            const product = await this.getById(id);
            const products = await this.getAll();
            const productDeleteIndex = products.filter((item:any) => item.id != product.id);
            const deleteById = await fs.promises.writeFile(this.archivo, JSON.stringify(productDeleteIndex));  
            
            if(product){
                return true;
            }else{
                return false;
            }
        } catch (error) {
            return  false;
        }
    }

    async updateById(id:number, product:any){
        try {
            const productsList = await this.getAll();
            const productIndex = productsList.findIndex((item:any) => item.id == id);
          
            if(productIndex >= 0){
                            
                product['id'] = id;
                productsList.splice(productIndex,1, product);
                const updateById = await fs.promises.writeFile(this.archivo, JSON.stringify(productsList));
                return product; 

            }else{
               return false;
            }

        } catch (error) {
            return false;
        }
    }
}