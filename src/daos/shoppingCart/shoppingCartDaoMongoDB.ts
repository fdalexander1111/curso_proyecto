import mongoDBContainer from "../../container/mongoDBContainer";
import { shoppingCarts } from "../../../schemas/shoppingCart";


export default class productDaoMongoDB extends mongoDBContainer{


    constructor() {
        super(shoppingCarts);
    }    
} 
