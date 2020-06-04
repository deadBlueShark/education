const fs = require('fs');

const readStream = fs.createReadStream('./www/poem.text', 'UTF-8')

// process.stdin.on('data', data => {
//   console.log(`${data.length - 1} characters`);
// })

let text = '';

readStream.on('data', data => {
  console.log(`${data.length - 1} characters`);
  text += data;
})

readStream.on('end', () => {
  console.log(`End of file: There are ${text.length - 1} characters`);
})
