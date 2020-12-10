'use strict';

let subTotal;
let shipping;
let netTotal;
const cart = [55.83, 22.06, 5.99];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

subTotal = shipping = netTotal = 0;

subTotal = cart.reduce(reducer);
console.log(`Cart total: ${subTotal}`);

shipping = (subTotal > 50) ? 0 : 5.99;
console.log(`Shipping: ${shipping}`);

netTotal = subTotal + shipping;
console.log(`Total: ${netTotal}`);
