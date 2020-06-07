const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not found')
})

// Custom 500 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => {
  console.log(port)
})
