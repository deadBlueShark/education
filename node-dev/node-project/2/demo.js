var fs = require('fs')
var data_object = require('./data.json')

console.log(data_object.name)

// fs.readFile('./data.json', 'utf-8', function(err, data) {
//   console.log(data)
// })

fs.readFile('./data.json', 'utf-8', (err, string_data) => {
  var data_parse = JSON.parse(string_data)
  console.log(data_parse.name)
})
