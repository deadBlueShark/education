const fs = require('fs');
//const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

// console.log(_.isString(true));
// console.log(_.uniq([1, 2, 3, 1, 3, 4]));

//var user = os.userInfo();
//console.log(user);

// var res = notes.addNote();
// console.log(res);
// console.log(notes.sum(4, 9));

// fs.appendFile('greeting.text', `Hello ${user.username}! Im ${notes.age} years old!\n`, (err) => {
//   if (err) throw err;
// });

const argv = yargs.argv;
console.log(argv);
var command = argv._[0];
//console.log('Command: ', command);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}


