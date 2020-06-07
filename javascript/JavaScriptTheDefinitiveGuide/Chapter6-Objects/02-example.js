const student = {
  name: 'nguyen',
  upName() {
    return this.name.toUpperCase();
  },
  nameLength() {
    return this.name.length;
  }
}

console.log(student.upName());
console.log(student['nameLength']());
