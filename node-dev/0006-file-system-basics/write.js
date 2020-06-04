const fs = require('fs');

const md = `
# This is a new file in markdown

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
  if (err) throw err;
  console.log('Write Success');
})
