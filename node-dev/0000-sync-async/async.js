fs = require('fs');

let print = (err, data) => { console.log('Folder:', data) };

fs.readdir('../', print);
console.log('End');
