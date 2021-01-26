'use strict';

class Car {
  static carCount = 0;

  constructor(doors, engine, color) {
    Car.carCount++;
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This ${this.color} car has ${this.doors} doors with ${this.engine} engine.`;
  }

  static countCar() {
    return this.carCount;
  }
}

const car = new Car(4, 'V8', 'white');
console.log(car);
console.log(car.carStats());

/*
Differences between functions and classes:

- Functions: hoisted, can be overwritten
- Classes: Not hoisted, can be extended but not be overwritten

*/


/* STATIC METHODS: relate to class, not instance */

new Car(5, 'V12', 'black');
console.log(Car.countCar());

/*
PROTOTYPES

Class is a prototype in itself
*/