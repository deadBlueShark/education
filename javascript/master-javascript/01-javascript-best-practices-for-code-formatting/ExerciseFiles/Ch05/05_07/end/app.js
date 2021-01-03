'use strict';

const cart = {
  items: 3,
  subTotal: 37.83,
  specialShip: false,
  shipping: -1,
  contact: false,
};

if (cart.items > 0) {
  if ((cart.items > 2) && ((cart.subTotal * 0.1) < 12)) {
    cart.shipping = 0;
    console.log('Your shipping is free');
  } else if (!cart.specialShip) {
    cart.shipping = cart.items * 5.99;
    console.log(`Your shipping total is $${String(cart.shipping)}`);
  } else {
    console.log('You will be contacted about delivery options');
  }
} else if (cart.items === 0) {
  console.log('Your cart appears to be empty!');
}

const shipException = ((cart.items > 2) && ((cart.subTotal * 0.1) < 12)); 
cart.contact = ((cart.items > 0) && shipException);
