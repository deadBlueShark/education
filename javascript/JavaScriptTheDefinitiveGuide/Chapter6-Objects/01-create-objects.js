// Objects can be created with object literals, with the new keyword, and (in ECMAScript 5) with the Object.create()

// literals
var students = { name: 'nguyen', age: 23 };

// new keyword
var scores = new Array();
console.log(scores); // []

// prototype
// Every JavaScript object has a second JavaScript object (or null, but this is rare) associated with it. This second
// object is known as a prototype, and the first object inherits properties from the prototype.

// Object.create(), that creates a new object, using its first argument as the prototype of that object. 
// Object.create() also takes an optional second argument that describes the properties of the new object
var person = Object.create({name: 'Nguyen'});
console.log(person); // {}
console.log(person.name); // Nguyen
var dog = Object.create({feet: 4}, {color: {value: 'black'}})
console.log(dog); // {}
console.log(dog.color); // black
