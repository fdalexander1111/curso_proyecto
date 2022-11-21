import mongoose from "mongoose";
import { config } from "../../src/config";

const URIString = config.URIString;

export default class mongoDBContainer {

    private model:any;
    
    constructor(model:any) {
        
        this.model = model;
        this.connect();
  
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
            const document = await this.model.findOne({_id: id});
            if(document){

                return document;
            }else{
                return false;
            }
                 
        } catch (error) {
            return false;
        }
    }

    async getAll(){
        try {

            const documents = await this.model.find();
            if(documents){

                return documents;
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    async deleteById(id:number){
        
        try {
            const result = await this.model.deleteOne({_id: id});

            console.log(result);
            if(result.deletedCount){
                
                return true;
            }else{
                return false;
            }
        } catch (error) {
            return  false;
        }
    }

    async updateById(id:number, item:any){
        try {
            const document = await this.model.findOne({_id: id});
       
            console.log(document);


        } catch (error) {
            return false;
        }
    }
    async getByname(field:string, name:string){

        try {
            const documents = await this.model.findOne({ [field] : name });
            if(documents){

                return documents;
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }

    }
  }