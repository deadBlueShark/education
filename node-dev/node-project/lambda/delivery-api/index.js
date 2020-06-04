'use strict'

const API = require('claudia-api-builder')
const api = new API()

const createDelivery = require('./handlers/create-delivery')
const updateDelivery = require('./handlers/update-delivery')

api.post('/deliveries', (req) => {
  return createDelivery(req.body)
})

api.put('/delivery/{id}', (req) => {
  return updateDelivery(req.pathParams.id, req.body)
}, {success: 200, error: 400})

module.exports = api
