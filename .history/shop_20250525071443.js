import { products } from "./product.js";
import {cart} from "./cart.js"
const shop = document.querySelector(".main");
const cartCount = document.querySelector(".cart-count");
function counting(){
  if (cartCount && cartCount.innerHTML.trim() === "") {
  cartCount.style.display = "none";
 }else{
  cartCount.style.display="flex";
 }
}
counting();
const ratingCount = (stars) => {
  if (stars < 0.5) return "./images/ratings/rating-0.png";
  if (stars < 1) return "./images/ratings/rating-05.png";
  if (stars < 1.5) return "./images/ratings/rating-10.png";
  if (stars < 2) return "./images/ratings/rating-15.png";
  if (stars < 2.5) return "./images/ratings/rating-20.png";
  if (stars < 3) return "./images/ratings/rating-25.png";
  if (stars < 3.5) return "./images/ratings/rating-30.png";
  if (stars < 4) return "./images/ratings/rating-35.png";
  if (stars < 4.5) return "./images/ratings/rating-40.png";
  if (stars < 5) return "./images/ratings/rating-45.png";
  return "./images/ratings/rating-50.png";
};

let shopHtml = "";

products.forEach((product) => {
  shopHtml += `
    <div class="shop-container">
      <div class="image-wrapper">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="content">
        <p class="item-name">${product.name}</p>
        <div class="rating">
          <img src="${ratingCount(product.rating.stars)}" alt="${product.rating.stars} stars" />
          <span>(${product.rating.count})</span>
        </div>
        <p class="price">$${(product.priceCents/100).toFixed(2)}</p>
      </div>
      <div class="card-footer">
        <div class="quantity">
          <select>
            ${[...Array(9)].map((_, i) => {
              const val = i + 1;
              return `<option value="${val}"${val === 1 ? ' selected' : ''}>${val}</option>`;
            }).join("")}
          </select>
        </div>
        <button class="add-to-cart" data-product-id="${product.id}" >Add to cart</button>
      </div>
    </div>`;
});

shop.innerHTML = shopHtml;

const buttons= document.querySelectorAll(".add-to-cart");

function addToCart(){
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
 
    let cartquantity=0
    cart.forEach((item)=>{
        cartquantity+=item.quantity
    })
    cartCount.innerHTML=cartquantity
    counting()
}
buttons.forEach((button)=>{
   button.addEventListener("click",()=>{
     const productId=button.dataset.productId
     addToCart(p)
    console.log(cart)
      
   })
})