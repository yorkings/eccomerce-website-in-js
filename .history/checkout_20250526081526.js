import {cart} from './cart.js'
import { products } from './product.js';

console.log(products)
const product=
let matchitem;
cart.forEach((item)=>{
    if(item.productId === products.id){
        console.log(item)
    }
})