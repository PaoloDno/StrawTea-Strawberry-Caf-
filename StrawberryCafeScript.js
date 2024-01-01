  document.addEventListener('DOMContentLoaded', () => {
  const orderDetails = document.querySelector('.order-details');
  const clearOrderBtn = document.querySelector('.clear-btn');
  const orderButtons = document.querySelectorAll('.order-btn');
  const hiddenContent = document.querySelectorAll('.display-none');
  let items = {}; // Object to track selected items and their quantities
  




  document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
      const size = button.getAttribute('data-size');
      const itemName = button.parentElement.parentElement.getAttribute('data-info');
      const price = button.getAttribute('data-price');
      
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



const buttonsArray = Array.from(orderButtons);
// Add a click event listener to the button

orderButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
  // Toggle the display of the hidden content
  if (hiddenContent[index].style.display === 'none') {

    hiddenContent[index].style.display = 'block';
    hiddenContent[index].classList.add('transition');
    button.textContent = `Cancel`; // Change button text when content is shown
    button.classList.add('cancel-btn');
    console.log('open');
  } else {
    
    hiddenContent[index].style.display = 'none';
    hiddenContent[index].classList.remove('transition');
   
    button.textContent = 'Order Meow';
    button.classList.remove('cancel-btn');
    console.log('close');
     // Change button text when content is hidden
    }
    console.log(buttonsArray);

});
});
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


