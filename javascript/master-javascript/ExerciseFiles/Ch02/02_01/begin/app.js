'use strict';

var abRatio = 0.9;
var cdRatio = 1.65;
var efRatio = 8.83;
var input = 52;

var square = (value) => {
  return (value * value);
};
var double = (value) => {
  return (value * 2);
};
var triple = (value) => {
  return (value * 3);
};

// assignment instead of comparison:
if (abRatio = 0.1) { 
  console.log(input * abRatio);
}

// redeclarations:
var cdRatio = 1.7;
var efRatio = 8.63;

// reassignments:
square = (input * input);
double = (input * 2);
triple = (input * 3);