var fs = require('fs')

fs.readdir('./temp', (err, data) => {
  console.log(data)
})
