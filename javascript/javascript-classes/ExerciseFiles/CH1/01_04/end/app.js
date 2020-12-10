// this code will run fine as the function is hoisted
sayHi();

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }
}

const cx5 = new Car( 4, 'V6', 'grey');

console.log(cx5);
console.log(cx5.carStats());

function sayHi() {
    return console.log('Hello this function can be called anywhere!');
}

sayHi();
