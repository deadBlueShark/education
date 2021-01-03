'use strict';

const abRatio = 0.95;
const cdRatio = 1.65;
const efRatio = 8.83;
const input = 52;

const abFactor = (value) => {
  return (value * abRatio);
};
const cdFactor = (value) => {
  return (value * cdRatio);
};
const efFactor = (value) => {
  return (value * efRatio);
};

console.log(`abFactor: ${abFactor(input)}`);
console.log(`cdFactor: ${cdFactor(input)}`);
console.log(`efFactor: ${efFactor(input)}`);
