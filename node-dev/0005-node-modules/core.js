const path = require('path');
const util = require('util');
const v8 = require('v8');
const uploadDir = path.join(__dirname, 'www', 'files', 'upload');
console.log(uploadDir)

util.log('Do this');
util.log('Do that');
util.log(v8.getHeapStatistics());
