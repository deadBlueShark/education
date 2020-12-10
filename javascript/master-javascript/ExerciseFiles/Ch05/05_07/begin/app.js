'use strict';

const cart = {
  items: 3,
  subTotal: 37.83,
  specialShip: false,
  shipping: -1,
  contact: -1,
};

const aaa = cart.items > 2 && (cart.subTotal * 0.1 < 12)
if (cart.items > 0) {
  if (aaa) {
    cart.shipping = 0;
    console.log('Your shipping is free');
  } else if (!cart.specialShip) {
    cart.shipping = cart.items * 5.99;
    console.log(`Your shipping total is $${String(cart.shipping)}`);
  } else {
    console.log('You will be contacted about delivery options');
  }
} else if (!cart.items) {
  console.log('Your cart appears to be empty!');
}

cart.contact = cart.items > 0 ? cart.items > 2 && cart.subTotal * 0.1 < 12 ? false : true : false;
