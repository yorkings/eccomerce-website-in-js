export let cart= JSON.parse(localStorage.getItem("cart")) || [];

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

export function removeFromCart(productId){
   const newcart=[];
   cart.forEach((cartItem)=>{
     if(cartItem.productId !== productId){
       newcart.push(cartItem);
     }
   })
   cart=newcart;
   localStorage.setItem("cart",j)
}