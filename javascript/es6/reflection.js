/*
Reflection in a programming language is the act of inspecting, dynamically calling,
and modifying classes, objects, properties, and methods. In other words, reflection
is the ability of the programming language to reflect on the structure of the code.

The ES6 Reflect API gives you a Reflect object that lets you call methods, construct
objects, getting and setting prototypes, manipulating and extending properties.

Reflection is important, because it lets you write programs and frameworks that
are able to handle a non-static code structure.

One use case is automated testing. You don’t have to do expensive and complicated
setup operations in order to test some methods of a class in isolation.

We can also use the Reflect API in proxies. We will learn about proxies in the next chapter.
*/

// Reflect.apply calls functions or methods:
let target = function getArea(width, height) {
  return `${ width * height }${this.units}`;
}

let thisValue = {units: 'cm'};
let args = [5, 3];

console.log('Area: ' + Reflect.apply(target, thisValue, args)); // Area: 15cm

// We can instantiate classes with Reflect.construct

let target2 =
  class Account {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    get contact() {
      return `${this.name} <${this.email}>`;
    }
  }

let args2 = ['Zsolt', 'info@zsoltnagy.eu']

let myAccount = Reflect.construct(target2, args2)
console.log(myAccount) // Account { name: 'Zsolt', email: 'info@zsoltnagy.eu' }

/*
Arguments of Reflect.construct:

target: the function we will construct
args: array of arguments
newTarget: new.target value (optional)
*/

// With the following example, we have full control over the value of new.target in the constructor

let target3 =
  class Account {
    constructor( name, email ) {
        this.name = name;
        this.email = email;
    }
    get contact() {
        return `${this.name} <${this.email}>`;
    }
  };

let args3 = [ 'Zsolt', 'info@zsoltnagy.eu']

let newTarget =
  class PrivateAccount {
    get contact() {
        return 'Private';
    }
  }

let myAccount2 = Reflect.construct(target3, args3, newTarget)

console.log(myAccount2.contact) // "Private"
console.log(myAccount2) // PrivateAccount {name: "Zsolt", email: "info@zsoltnagy.eu"}

// We can get the prototype of an object using the Reflect API:
let classOfMyAccount = Reflect.getPrototypeOf( myAccount );
console.log( classOfMyAccount.prototype === myAccount.prototype );

// We can also set prototypes using Reflect.setPrototypeOf:
let newProto = {
    get contact() {
        return `${this.name} - 555-1269`;
    }
}

Reflect.setPrototypeOf( myAccount, newProto );

console.log( myAccount.contact ) // "Zsolt - 555-1269"

// Reflect.has determines if a property exists for a given target object.
// The call enumerates all properties, not only own properties
let target = class Account {
    constructor( name, email ) {
        this.name = name;
        this.email = email;
    }
    get contact() {
        return `${this.name} <${this.email}>`;
    }
};
let args = [
    'Zsolt',
    'info@zsoltnagy.eu'
];

let myAccount = Reflect.construct(
    target,
    args );


console.log(Reflect.has( myAccount, 'name' )) // true
console.log(Reflect.has( myAccount, 'contact' )) // true

// Reflect.ownKeys returns all own properties of a target in an array
console.log(Reflect.ownKeys( myAccount )) // [ 'name', 'email' ]

// Reflect.get gets a property based on a key. As an optional parameter, the this context can be specified.
console.log(Reflect.get( myAccount, 'name' )) // "Zsolt"
console.log(Reflect.get( myAccount, 'contact' )) // "Zsolt - 555-1269"





