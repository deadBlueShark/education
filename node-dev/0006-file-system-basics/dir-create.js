const fs = require('fs');

if (fs.existsSync('./assets/upload')) {
  console.log('Dir existed.');
} else {
  fs.mkdir('./assets/upload', err => {
    if (err) throw err;
    console.log('Dir created');
  });
}
