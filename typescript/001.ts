// Function declaration
let greet: (name: string) => void = function (name: string): void {
  console.log(`Hello ${name}`);
};

// Object declaration
let person: { name: string; age: number };

person = { name: "NguyenTrex", age: 25 };
greet(person.name);

// Interface declaration
interface AnimalInterface {
  color: string;
  numberFoot: number;
}
let dog: AnimalInterface = { color: 'Black', numberFoot: 4 };

// Type alias
type SmartPhone = {
  name: string;
  manufacturer: string;
}
let myIphone: SmartPhone = { name: 'iPhone 7', manufacturer: 'Apple' };
