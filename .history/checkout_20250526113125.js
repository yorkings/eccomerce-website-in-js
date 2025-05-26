import { cart,removeFromCart} from './cart.js';
import { products } from './product.js';

const cartContainer = document.getElementById('cart-container');
const summaryContainer = document.getElementById('summary-container');

let cartHTML = '';

cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  if (product) {
    cartHTML += `
      <div class="cart-item js-container-${product.id}">
        <div class="cart-item-details">
          <img src="${product.image}" alt="${product.name}" class="cart-image" />
          <p class="cart-item-title">${product.name}</p>
          <p class="cart-item-price">$${(product.priceCents / 100).toFixed(2)}</p>
          <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
            <span class="update-link  primary-link">update</span>
            <span class="delete-link  primary-link" data-product-id="${product.id}" >delete</span>
        </div>
          <div class="delivery-options" aria-label="Select delivery day for ${product.name}">
            ${['Monday, June 13', 'Wednesday, June 15', 'Tuesday, June 21'].map((date, index) => `
              <div class="delivery-option">
                <input type="radio" id="delivery-${product.id}-${index}" name="delivery-${product.id}" ${index === 2 ? 'checked' : ''}/>
                <label for="delivery-${product.id}-${index}">${date}${index === 2 ? ' (FREE Shipping)' : index === 1 ? ' ($4.99 Shipping)' : ' ($9.99 Shipping)'}</label>
              </div>
            `).join('')}
          </div>
      </div>
    `;
  }
});

cartContainer.innerHTML = cartHTML;

// Order Summary Calculation
const subtotalCents = cart.reduce((total, item) => {
  const product = products.find(p => p.id === item.productId);
  return total + (product ? product.priceCents * item.quantity : 0);
}, 0);

const shippingCents = 499;
const taxCents = Math.round((subtotalCents + shippingCents) * 0.10);
const totalCents = subtotalCents + shippingCents + taxCents;

summaryContainer.innerHTML = `
  <h3>Order Summary</h3>
  <div class="summary-line"><span>Items (${cart.length}):</span> <span>$${(subtotalCents / 100).toFixed(2)}</span></div>
  <div class="summary-line"><span>Shipping & handling:</span> <span>$${(shippingCents / 100).toFixed(2)}</span></div>
  <div class="summary-line"><span>Total before tax:</span> <span>$${((subtotalCents + shippingCents) / 100).toFixed(2)}</span></div>
  <div class="summary-line"><span>Estimated tax (10%):</span> <span>$${(taxCents / 100).toFixed(2)}</span></div>
  <div class="summary-line order-total"><span>Order total:</span> <span>$${(totalCents / 100).toFixed(2)}</span></div>
  <button class="place-order-btn">Place your order</button>
`;

document.querySelectorAll(".delete-link").forEach((link)=>{
  link.addEventListener("click",()=>{
     let id=link.dataset.productId;
     removeFromCart(id);
     const content=document.querySelector(`.js-container-${id}`);
     c
  })
})
