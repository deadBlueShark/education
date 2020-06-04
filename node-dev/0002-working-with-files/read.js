const fs = require('fs')

let data1 = require('./data.json')

console.log(data1.name) // Le Chi Nguyen

fs.readFile('./data.json', 'utf-8', function(err, data2) {
  console.log(data2)
  console.log(data2.name) // undefined
  console.log(JSON.parse(data2).name) // Le Chi Nguyen
})
