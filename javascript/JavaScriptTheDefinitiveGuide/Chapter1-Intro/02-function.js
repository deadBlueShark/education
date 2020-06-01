function plus1(x) {
  return ++x;
}

console.log(plus1(2));

// Functions are values and can be assigned to variables
var square = function(x) {
  return x * x;
}

console.log(square(9));

// When functions are assigned to the properties of an object, we call them "methods"
// ALL JS OBJECTS HAVE METHODS
var a = [];
a.push(1, 2, 3);
console.log(a);
a.reverse();
console.log(a);

// We can define our own methods. The "this" keyworld refers to the object on which 
// the method is defined
var points = [
  {x: 0, y: 0},
  {x: 3, y: 4}
];
// Define a method to compute the distance between points
points.distance = function() {
 var p1 = this[0];
 var p2 = this[1];

 return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
console.log(points.distance());

function factorial(x) {
  var product = 1;
  for (var i = 2; i <= x; i++) {
    product *= i;
  }

  return product;
}
console.log(factorial(4));

// Define a constructor function
function Point(x, y) { // By convention, contructors start with capitals
  this.x = x;          // "this" keyword is the new object being initialized
  this.y = y;          // Store function arguments as object properties
}                      // No return is neccessary

// Create an instance
var point = new Point(3, 4);

// Define methods for Point objects by assigning them to the prototype object associated 
// with the constructor function
Point.prototype.cal_distance_to_original = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
console.log(point.cal_distance_to_original());
