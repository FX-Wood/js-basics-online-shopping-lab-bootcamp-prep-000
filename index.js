var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addToCart(item) {
  cart.push({"itemName": item, "itemPrice": getRandomInt(100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let returnString = 'In your cart, you have ';
  switch(cart.length) {
    case 0:
      return "Your shopping cart is empty.";
      break;
    case 1:
      for (let i = 0; i < cart.length; i++) {
        returnString += `${cart[i].itemName} at ${cart[i].itemPrice}.`;
      }
      return returnString;
      break;
    case 2:
      for (let i = 0; i < cart.length -1; i++) {
        returnString += `${cart[i].itemName} at ${cart[i].itemPrice} and`;
      }
      returnString += `${cart[i].itemName} at ${cart[i].itemPrice}.`
      return returnString;
      break;
    default:
      for (let i = 0; i < cart.length -1; i++) {
        returnString += `${cart[i].itemName} at ${cart[i].itemPrice} and,`;
      }
      returnString += `${cart[i].itemName} at ${cart[i].itemPrice}.`
      return returnString;
  }
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
