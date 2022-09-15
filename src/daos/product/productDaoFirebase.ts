import firebaseContainer from "../../container/firebaseContainer";


export default class ProductosDaoFirebase extends firebaseContainer{


    constructor() {
        super('products');
    }    
} 