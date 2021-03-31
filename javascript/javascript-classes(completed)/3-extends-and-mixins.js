/*******************************
 * INHERITANCE
 * The extends keyword is used in class declarations or class expressions to
 * create a class that is a child of another class.
 * The body of a class expression is executed in strict mode
 */

class Animal {}

// class declaration
class Dog extends Animal {}

// class expression
const Tiger = class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

console.log(new Tiger('Siberi tiger')); // Tiger { name: 'Siberi tiger' }

/*******************************
 * COMPOSITION (minxins)
 * Composition over inheritance
 */

 const DisplayMixin = {
   displayName() {
     console.log(`Name: ${this.name}`);
   }
 }

 const EventMixin = {
   run() {
     console.log(`Running`);
   }
 }

 class Student {
   constructor(name) {
     this.name = name;

     Object.assign(this, DisplayMixin);
   }
 }

 // Or
Object.assign(Student.prototype, EventMixin);

const student = new Student('Nguyen');
student.displayName();
student.run();