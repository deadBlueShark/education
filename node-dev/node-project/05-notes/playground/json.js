// var obj = {
//   name: 'le nguyen'
// };

// var string = JSON.stringify(obj);
// console.log(typeof string); // string
// console.log(string);

// var person = '{"name": "le chi nguyen", "age": 25}';
// var personO = JSON.parse(person);
// console.log(typeof personO);
// console.log(personO);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
}

var originalString = JSON.stringify(originalNote); // convert object to string
fs.writeFileSync('notes.json', originalString);    // Write string to file
var noteString = fs.readFileSync('notes.json');    // Read from file
var note = JSON.parse(noteString);                 // Convert string to object

console.log(typeof note);
console.log(note.title);

