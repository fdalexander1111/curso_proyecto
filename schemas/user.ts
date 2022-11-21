import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    email: { type: String, required: true, max: 400},
    password: { type: String, required: true, max: 20 },
    name: { type: String, required: true, max: 100 },
    adress: { type: String, required: true, max: 400 },
    age: { type: Number, required: true},
    phone: { type: String, required: true, max: 15 },
    avatar: { type: String, required: true, max: 400 }
});



export const user = mongoose.model(usersCollection, usersSchema);

 