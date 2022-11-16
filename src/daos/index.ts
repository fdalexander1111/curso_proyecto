import dotenv from 'dotenv';
dotenv.config();
let productDao : any;
let shoppingCartDao : any;
let userDao : any;

switch (process.env.DATABASE) {

    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./product/productDaoFirebase')
        const { default: shoppingCartDaoFirebase } = await import('./shoppingCart/shoppingCartDaoFirebase')

        productDao = new ProductosDaoFirebase()
        shoppingCartDao = new shoppingCartDaoFirebase()
        break

    case "mongoDB":
        const { default: productDaoMongoDB } = await import('./product/productDaoMongoDB');
        productDao = new productDaoMongoDB();
        
        const { default: shoppingCartDaoMongoDB } = await import('./shoppingCart/shoppingCartDaoMongoDB');
        shoppingCartDao = new shoppingCartDaoMongoDB();

        const { default: userDaoMongoDB } = await import('./user/userDaoMongoDB');
        userDao = new userDaoMongoDB();
           
        break
}

export { productDao, shoppingCartDao, userDao  }




