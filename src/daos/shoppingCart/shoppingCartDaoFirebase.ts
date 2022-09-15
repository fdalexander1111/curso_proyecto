import firebaseContainer from "../../container/firebaseContainer";



export default class shoppingCartDaoFirebase extends firebaseContainer{


    constructor() {
        super('shoppingCarts');
    }    
} 