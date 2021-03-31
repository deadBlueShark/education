class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}

const student = new Student('Nguyen', 16, 10);
console.log(student);
student.displayInfo();