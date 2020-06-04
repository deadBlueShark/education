var fs = require('fs')

var data = {
  name: 'Bob',
  age: 30
}
fs.writeFile('./temp/write.txt', JSON.stringify(data), (err) => {
  console.log("Write finished!", err)
})
