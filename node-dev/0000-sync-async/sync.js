fs = require('fs');

data = fs.readdirSync('../');
console.log('Folder:', data);

console.log('End');
