// module.exports.age = 25;

// module.exports.addNote = function() {
//   return 'New note';
// }

// module.exports.sum = (a, b) => {
//   return a + b;
// }
const fs = require('fs');

var addNote = (title, body) => {
  var note = {
    title,    // In ES6, same as title: title
    body
  }

  try {
    // Fetch available note data
    var rawNotesData = fs.readFileSync('notes-data.json');
    var notes = JSON.parse(rawNotesData);
  } catch (e) {
    var notes = []
  }

  // Get notes (in available notes) that has title same as input title
  var dublicateNotes = notes.filter((note) => note.title === title);

  if (dublicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {

};

var getNote = (title) => {

};

var removeNote = (title) => {

};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
