'use strict'

const API = require('claudia-api-builder')
const api = new API()

const getPizzas = require('./handlers/pizzas/index')
const getPizza = require('./handlers/pizzas/show')

const createOrder = require('./handlers/orders/create')
const updateOrder = require('./handlers/orders/update')
const deleteOrder = require('./handlers/orders/delete')
const getOrders = require('./handlers/orders/index')
const getOrder = require('./handlers/orders/show')

api.get('/', () => {
  return 'Welcome to Nguyen pizzeria'
})

api.get('/pizzas', () => {
  return getPizzas()
})

api.get('/pizza/{id}', req => {
  return getPizza(req.pathParams.id)
}, { error: 404 })

api.get('/orders', req => {
  return getOrders(req.body)
})

api.get('/order/{id}', req => {
  console.log(req.pathParams.id)
  return getOrder(req.pathParams.id)
}, { error: 404 })

api.post('/orders', req => {
  return createOrder(req.body)
}, { success: 201, error: 400 })

api.put('/order/{id}', req => {
  return updateOrder(req.pathParams.id, req.body)
}, { error: 400 })

api.delete('/order/{id}', req => {
  return deleteOrder(req.pathParams.id)
}, { error: 400 })



module.exports = api
