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
                <img src='./images/ratings/rating-15.png' alt="" class="rate-image">
                <p class="counts">${product.rating.count}</p>
            </div>
            <p class="price">${(product.priceCents/100).toFixed(2)}</p>
         </div>
         <div class="quantity">
            <select>
               <option selected value="1">1</option>
               <option value="2">2</option>
               <option value="3"></option>
               <option value="4">3</option>
               <option value="5"></option>
               <option value="6">4</option>
               <option value="7">5</option>
               <option value="8">6</option>
               <option value="9"></option>
            </select>
         </div>
         <button class="cart">Add to cart</button>
      </div>
    `
   
})
 shop.innerHTML=shopHtml