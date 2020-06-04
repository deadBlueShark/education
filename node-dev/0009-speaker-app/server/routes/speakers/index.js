const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('List speakers')
  })

  router.get('/:name', (req, res) => {
    res.send(`Speaker name: ${req.params.name}`)
  })

  return router
}
