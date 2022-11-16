import firebase from "firebase-admin";
import { config } from "../config";

const firebaseConfig:any = config.firebase;

export default class firebaseContainer {
    
    private db: any;
    private collection: any;
  
    constructor(collection:any) {
       
        this.connect();
        this.db = firebase.firestore();
        this.collection = this.db.collection(collection);
        
    }

    async connect(){

        try {

            if (firebase.apps.length === 0) {
          
                firebase.initializeApp({
                    credential: firebase.credential.cert(firebaseConfig),
                    databaseURL: "https://ecommerce-cc127.firebaseio.com"
                });
            }            

        } catch (err) {

        throw new Error(`ERROR DE CONEXION + ${err}`)

        }
    }

  
      async save(item:any){
          try {

            const doc = this.collection.doc();
            const result = await doc.create(item);
            return result;
             
          } catch (error) {
              return false;
          }
      }
  
      async getById(id:any){
          try {
            
              console.log(id);
            const doc = this.collection.doc(id);
               
            console.log(doc);
            const item = await doc.get();
               
            console.log(item);
            const data = item.data();
            const result = {id,...data};
            console.log(result);
            return result;
              
          } catch (error) {
              return false;
          }
      }
  
      async getAll(){
          try {
       
            const result:any = [];
            const query = await this.collection.get();
       
            query.forEach((doc : any) => {
                result.push({ id: doc.id, ...doc.data() })
            })
    
            return result;

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