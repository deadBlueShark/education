"use strict";

const fruits = [
  'apple',
  'banana',
  'guava',
  'kiwi',
  'mango',
  'pear',
  'pineapple',
];

const veggies = [
  'beet',
  'carrot',
  'parsnip',
  'potato',
  'sunchoke',
  'turnip',
  'yam',
];

const fruitsList = fruits.join(", ");
const veggiesList = veggies.join(", ");

console.log(`Fruits to buy: ${fruitsList}`);
console.log(`Veggies to buy: ${veggiesList}`);
