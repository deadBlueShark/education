'use strict';

const abRatio = 0.9;
let cdRatio = 1.65;
let efRatio = 8.83;
const input = 52;

const square = (value) => {
  return (value * value);
};
const double = (value) => {
  return (value * 2);
};
const triple = (value) => {
  return (value * 3);
};

// assignment instead of comparison:
if (abRatio === 0.1) {
  console.log(input * abRatio);
}

// redeclarations:
cdRatio = 1.7;
efRatio = 8.63;

// reassignments:
// square = (input * input);
// double = (input * 2);
// triple = (input * 3);
