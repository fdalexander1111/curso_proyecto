import mongoDBContainer from "../../container/mongoDBContainer";
import {products} from "../../../schemas/product";


export default class productDaoMongoDB extends mongoDBContainer{


    constructor() {
        super(products);
    }    
} 



