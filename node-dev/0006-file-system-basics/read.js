const fs = require('fs');

console.log('Sync Version \n================================\n');
let text = fs.readFileSync('./assets/client.data', 'UTF-8');
console.log(text);

console.log('Async Version \n================================\n');
fs.readFile('./assets/client.data', 'UTF-8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

fs.readFile('./assets/favicon.ico', (err, data) => {
  if (err) throw err;
  console.log('Read binary file \n================================\n');
  console.log(data);
})
