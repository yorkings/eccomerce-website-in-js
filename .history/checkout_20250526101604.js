import { cart } from './cart.js';
import { products } from './product.js';

const cartContainer = document.getElementById('cart-container');

let cartHTML = '';

cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  if (product) {
    cartHTML += `
              <section class="cart-item">
              <img src="${product.image}" alt="${product.name}" class="cart-image" />
              <div class="cart-item-details">
                <p class="cart-item-title">${product.name}</p>
                <p class="cart-item-price">$${(product.priceCents / 100).toFixed(2)}</p>
                <p class="cart-item-quantity">Quantity: ${item.quantity}</p>

                <div class="delivery-options" aria-label="Select delivery day for ${product.name}">
                  ${['Monday', 'Tuesday', 'Wednesday'].map(day => `
                    <div class="delivery-option">
                      <input type="radio" id="delivery-${product.id}-${day.toLowerCase()}" name="delivery-${product.id}" value="${day.toLowerCase()}" />
                      <label for="delivery-${product.id}-${day.toLowerCase()}">${day}</label>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
    `;
  }
});

cartContainer.innerHTML = cartHTML;
