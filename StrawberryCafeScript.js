document.addEventListener('DOMContentLoaded', () => {
  const orderDetails = document.querySelector('.order-details');
  const clearOrderBtn = document.querySelector('.clear-btn');

  const items = {}; // Object to track selected items and their quantities

  document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
      const size = button.getAttribute('data-size');
      const itemName = button.parentElement.parentElement.getAttribute('data-info');
      const price = button.parentElement.parentElement.getAttribute('data-price');
      
      const itemKey = `${size} ${itemName} - PHP ${price}`;
      if (items[itemKey]) {
        items[itemKey].quantity++;
      } else {
        items[itemKey] = {
          quantity: 1,
          price: parseFloat(price),
        };
      }

      updateOrderSummary();
    });
  });

  clearOrderBtn.addEventListener('click', () => {
    orderDetails.innerHTML = '';
    items = {}; // Reset the items object on clearing the order
  });

  function updateOrderSummary() {
    orderDetails.innerHTML = '';
    Object.keys(items).forEach(itemKey => {
      const { quantity, price } = items[itemKey];
      const totalPrice = quantity * price;
      const orderItem = document.createElement('p');
      orderItem.textContent = `Added: ${itemKey} x${quantity} - Total: PHP ${totalPrice}`;
      orderDetails.appendChild(orderItem);
    });
  }
});


// JavaScript for onscroll animation
const elements = document.querySelectorAll('.hidden');

function fadeInOnScroll() {
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
