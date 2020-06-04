const fs = require('fs');

let readStreaMode = { flags: 'a', encoding: 'utf8' };
let writeStream = fs.createWriteStream('./www/print.txt', readStreaMode);

writeStream.write('Hello World\n');
writeStream.write('Hello World\n');

process.stdin.on('data', data => {
  if (data.toString().trim() == 'exit') process.exit();
  writeStream.write(data);
});

let readStream = fs.createReadStream('./www/print.txt', 'UTF-8');
let copyWriteStream = fs.createWriteStream('./www/copy-print.txt', readStreaMode);
readStream.pipe(copyWriteStream);
