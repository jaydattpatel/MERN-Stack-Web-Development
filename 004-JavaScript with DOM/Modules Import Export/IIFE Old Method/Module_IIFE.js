/*

author : Jaydatt Patel

IIFE funtion to encapsulate and isolate funtions or variables from other files.

*/
const shoppingCart = (function () {

  // Private variables and functions
  let cart = [];
  let total = 0;

  function calculateTotal() {
    total = cart.reduce((acc, item) => acc + item.price, 0);
  }

  // Public methods
  return {
    addItem: function (item) {
      cart.push(item);
      calculateTotal();
    },
    getTotal: function () {
      return total;
    },
    getCartContents: function () {
      return cart;
    },
  };
})();

shoppingCart.addItem({ id: 1, pName: 'Product1', price: 10 });
shoppingCart.addItem({ id: 2, pName: 'Product2', price: 20 });
shoppingCart.addItem({ id: 3, pName: 'Product3', price: 30 });

//get the cart container
const cartItems = document.getElementById('cart-items');

//Display the cart items
const cartContent = shoppingCart.getCartContents();
cartContent.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.pName} - $${item.price}`;
  cartItems.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById('total-price');
// Display the total price
totalPriceElement.textContent = `Total: $${shoppingCart.getTotal()}`;
