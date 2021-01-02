'use strict';

const abRatio = 0.95;
const input = 52;

const abFactor = (value) => {
  return (value * abRatio);
};

console.log(`abFactor: ${abFactor(input)}`);
