const fs = require('fs');

const files = fs.readdirSync('./assets');
console.log(files);
console.log('Read dir sync complete')

fs.readdir('./assets', (err, files) => {
  if (err) throw err;
  console.log(files);
  console.log('Read dir async complete');
})

