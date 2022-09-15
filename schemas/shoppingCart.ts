import mongoose from 'mongoose';

const shoppingCartCollection = 'shoppingCart';

const shoppingCartsSchema = new mongoose.Schema({

    productos: { type: [], required: false },
    
    
},{timestamps: true});


export const shoppingCarts = mongoose.model(shoppingCartCollection, shoppingCartsSchema);