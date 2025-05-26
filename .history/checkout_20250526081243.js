import {cart} from './cart.js'
import { products } from './product.js';
let matchitem;
cart.forEach((item)=>{
    if(item.productId){
        console.log(item)
    }
})