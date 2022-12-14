import mongoose from 'mongoose';

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({

    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    codigo: {type: String, required: true },
    foto: {type: String, required: true },
    precio: {type: String, required: true },
    stock: {type: String, required: true },
    
},{timestamps: true});


export const products = mongoose.model(productsCollection, productsSchema);