const fs = require('fs');
let data = require('./assets/style/info.json');

console.log(data);
data.colors.forEach(item => {
  let colorText = `${item.name}: ${item.id}\n`;
  fs.appendFile('./assets/style/mirror-info.json', colorText, err => {
    if (err) throw err;
    console.log('Written');
  });
})
