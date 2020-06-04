// System module
const express = require('express')
const path = require('path')
const createError = require('http-errors')

// Custom module
const routes = require('./routes')

const app = express()

// Setting view engine
app.set('view engine', 'pug')
app.locals.pretty = app.get('env') === 'development'
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(express.static('public'))
app.use('/', routes())

app.use((req, res, next) => {
  next(createError(404, 'Page not found'))
})
app.use((err, req, res, next) => {
  const status = err.status || 500

  res.locals.message = err.message
  res.locals.status = status
  res.locals.error = req.app.get === 'development' ? err : {}
  res.status(status)
  res.render('404')
})

app.listen(8000)

module.export = app
