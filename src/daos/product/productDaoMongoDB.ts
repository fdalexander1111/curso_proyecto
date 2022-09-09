import mongoDBContainer from "../../container/mongoDBContainer";



export class productDaoMongoDB extends mongoDBContainer{


    constructor(model:any) {
        super(model);
        this.connect().catch(err => {
            throw new Error(`error al conectar a la base de datos ${err}`)
        });
    }    
} 



