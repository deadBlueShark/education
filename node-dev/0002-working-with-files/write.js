const fs = require('fs');

let student = { name: 'Le Chi Nguyen' };

fs.writeFile('student.json', JSON.stringify(student), (err) => {
  if (err) throw err;
  console.log('The file has been saved.');
})
