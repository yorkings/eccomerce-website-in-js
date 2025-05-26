import { cart } from './cart.js';
import { products } from './product.js';

const cartContainer = document.getElementById('cart-container');

let cartHTML = '';

cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  if (product) {
    cartHTML += `
  
    `;
  }
});

cartContainer.innerHTML = cartHTML;
