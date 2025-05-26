import { cart } from './cart.js';
import { products } from './product.js';

const cartContainer = document.getElementById('cart-container');

let cartHTML = '';

cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  if (product) {
    cartHTML += `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-details">
          <p class="cart-item-title">${product.name}</p>
          <p class="cart-item-price">$${(product.priceCents / 100).toFixed(2)}</p>
          <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
        </div>
      </div>
      <div class="select">
       <input type="radio" name="delivery-${product.id}" >
       
     </div>
    `;
  }
});

cartContainer.innerHTML = cartHTML;
