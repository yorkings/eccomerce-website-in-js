import {products} from "./product.js"

const shop=document.querySelector(".main");

let shopHtml=""
products.forEach((product)=>{
    shopHtml+=`
    <div class="shop-container">
         <img src=${product.image} alt=${product.name} class="image">
         <div class="content">
            <p class="item-name">${product.name}</p>
            <div class="rating">
                <img src='' alt="" class="rate-image">
                <p class="counts">${product.rating.count}</p>
            </div>
            <p class="price">${(product.priceCents/100).toFixed(2)}</p>
         </div>
         <div class="quantity">
            <select>
               <option selected value="1">1</option>
               <option value="2">2</option>
               <option value="3">4</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
            </select>
         </div>
         <button class="add-to-cart">Add to cart</button>
      </div>
    `
   
})
const rating_count=(stars)=>{
  if(stars < 0.5){
     return "./images/ratings/rating-0.png"
  }
 else if(stars >0.5 && stars <1){
    return "./images/ratings/rating-0.png"
  }
  else if(stars >1 && stars <1.5){
    return "./images/ratings/rating-05.png"
  }
   else if(stars >1 && stars <2){
    return "./images/ratings/rating-0.png"
  }
   else if(stars >2 && stars <2.5){
    return "./images/ratings/rating-10.png"
  } else if(stars >2.5 && stars <3){
    return "./images/ratings/rating-15.png"
  } else if(stars >3 && stars <3.5){
    return "./images/ratings/rating-20.png"
  } else if(stars >3.5 && stars <4){
    return "./images/ratings/rating-0.png"
  } else if(stars >4 && stars <4.5){
    return "./images/ratings/rating-0.png"
  } else if(stars >4.5 && stars <5){
    return "./images/ratings/rating-0.png"
  }
 

}
 shop.innerHTML=shopHtml