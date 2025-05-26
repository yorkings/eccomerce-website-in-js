import {cart} from './cart.js'
import { products } from './product.js';

console.log(pro)
let matchitem;
cart.forEach((item)=>{
    if(item.productId === products.id){
        console.log(item)
    }
})