class Animal {
  static create() {
    return new Animal();
  }

  constructor() {
    console.log( 'Accessing constructor from the class');
  }

  printHello() {
    console.log('Hello World')
  }
}

const animal = Animal.create();
animal.printHello();
