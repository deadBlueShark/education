var path = require("path");

console.log(__dirname);                    // /home/spectre
console.log(__filename);                   // /home/spectre/hello.js
console.log(path.basename(__filename));    // hello.js
