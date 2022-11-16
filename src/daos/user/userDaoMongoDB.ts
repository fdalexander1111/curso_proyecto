import mongoDBContainer from "../../container/mongoDBContainer";
import { user } from "../../../schemas/user";


export default class userDaoMongoDB extends mongoDBContainer{


    constructor() {
        super(user);
    }    
} 
