export const cart= JSON.parse()[];

export function addToCart(productId){
       let matching;
     cart.forEach((item)=>{
       if(productId ===item.productId){
        matching=item
       }
     })
     if(matching){
       matching.quantity +=1;
     }else{
        cart.push({
       productId:productId,
       quantity:1
      });
     }
 
    localStorage.setItem("cart",JSON.stringify(cart))
}