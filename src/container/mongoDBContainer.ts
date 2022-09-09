import mongoose from "mongoose";
import { config } from "../daos/index";

const URIString = config.URIString;

export default class mongoDBContainer {

    private model:any;
    
    constructor(model:string) {
        
        this.model = model;
  
    }

    async connect(){

        try {
            return await mongoose.connect(URIString);

        } catch (err) {

        throw new Error(`ERROR DE CONEXION + ${err}`)

        }
    }
  
    async save(object:any){
        try {

            const document = new this.model(object);
            const result = await document.save();
            return result;
            
        } catch (error) {
            return false;
        }
    }

    async getById(id:number){
        try {
            
            
        } catch (error) {
            return false;
        }
    }

    async getAll(){
        try {
    
        } catch (error) {
            return false;
        }
    }

    async deleteById(id:number){
        
        try {
    
        } catch (error) {
            return  false;
        }
    }

    async updateById(id:number, product:any){
        try {
    

        } catch (error) {
            return false;
        }
    }
  }