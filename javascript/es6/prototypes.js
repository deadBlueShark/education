/*
Effects of creating a function
Invoking a function as a constructor
Demonstration of prototypal inheritance
Traversal of the prototype chain
Components of the prototype chain
A function’s prototype
Prototypes without constructors
Why is a prototype called a prototype?
*/

function Person(name) {
  return name
}

console.log(Person) // [Function: Person]
console.log(typeof Person) // function
console.log(typeof Person.prototype) // object
