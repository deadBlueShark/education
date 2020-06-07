const dog = {color: 'red', height: 1};
console.log('color' in dog);              // true
console.log(dog.color !== undefined);     // true
console.log(dog.NAME !== undefined);      // false
console.log(dog.hasOwnProperty('color')); // true

// Get all keys of an object
console.log(Object.keys(dog));            // [ 'color', 'height' ]
console.log(Object.values(dog));          // [ 'red', 1 ]
const entries = Object.entries(dog);
console.log(entries);
for (const [key, value] of entries) {
  console.log(`${key} is ${value}.`);
}
