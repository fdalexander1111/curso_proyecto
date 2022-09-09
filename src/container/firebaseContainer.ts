export default class firebaseContainer {
    
    private archivo: string;
  
    constructor(archivo:string) {
       
      this.archivo = archivo;
   
    }
  
      async save(product:any){
          try {

             
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