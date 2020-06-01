function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.introduce = function() {
  return "I'm " + this.name + ". I'm " + this.age + " years old.";
}

console.log(new Student('Nguyen', 27).introduce());
