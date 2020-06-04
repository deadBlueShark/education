// Three type of module:
// + Module that ships with installation of NodeJS
// + Module that we install with npm
// + Custom module

const path = require('path');

global.console.log(`Absolute current folder path: ${__dirname}`);
console.log(`Absolute current file path: ${__filename}`);
console.log(`File name: ${path.basename(__filename)}`);

// Every NodeJS file that we create is referred to as a module. It contains its
// own code, and when we want to load other modules we must use the require()
// function
