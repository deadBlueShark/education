var example = {x: 1, y: undefined, z: null};
var example2 = Object.create(example); // example properties as prototype properties

console.log('x' in example); // true
console.log('y' in example); // true
console.log('z' in example); // true

console.log(example.hasOwnProperty('y')); // true
console.log(example2.hasOwnProperty('y')); // false

