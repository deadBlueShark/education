const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('x-server-date', new Date())
  next()
})

app.get('/', (req, res) => {
  console.log(app.get('env'))
  res.send('Homepage')
})

app.get('/user/:name/:id', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  res.sendStatus(200)
})

// Raise error
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!')
})

app.get('/next-error', (req, res, next) => {
  next(new Error('Something went wrong!'))
})
// In two above case, the result is the same, but v1 do not work in asynchronous
// case. Ex:
app.get('/error2', (req, res, next) => {
  setTimeout(() => {
    // throw new Error('Something went wrong!')  -> Not work
    next(new Error('Something went wrong'))  // Always use this to raise errors
  }, 1000)
})
app.listen(8000)
