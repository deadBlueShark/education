'use strict'

const API = require('claudia-api-builder')
const api = new API()

const getPizza = require('./handlers/pizza/get-pizzas')
const createPizza = require('./handlers/pizza/create-pizza')
const updatePizza = require('./handlers/pizza/update-pizza')
const deletePizza = require('./handlers/pizza/delete-pizza')

const getOrder = require('./handlers/order/get-order')
const createOrder = require('./handlers/order/create-order')
const updateOrder = require('./handlers/order/update-order')
const deleteOrder = require('./handlers/order/delete-order')
const updateDeliveryStatus = require('./handlers/update-delivery-status')

api.registerAuthorizer('PizzaCognitoAuth', {
  providerARNs: ['arn:aws:cognito-idp:ap-southeast-1:778158919039:userpool/ap-southeast-1_qSQjL9rs1']
})

//
api.post('/protectedRoute', (req) => {
  return 'Protect'
})

// ROOT ROUTE
api.get('/', () => {
  return 'Welcome to our restaurant!'
}, {cognitoAuthorizer: 'PizzaCognitoAuth'})

// PIZZA ROUTE
api.get('/pizzas', () => {
  return getPizza()
})

api.get('/pizza/{id}', (req) => getPizza(req.pathParams.id), {error: 404})

api.post('/pizzas', (req) => {
  return createPizza(req.body)
})

api.put('/pizza/{id}', (req) => {
  return updatePizza()
})

api.delete('/pizza/{id}', (req) => {
  return deletePizza()
})

// ORDER ROUTE
api.get('orders', () => {
  return getOrder()
})

api.get('/orders/{id}', (req) => {
  return getOrder(req.pathParams.id)
})

api.post('/orders', (req) => {
  return createOrder(req.body)
}, {success: 201, error: 400})

api.put('/orders/{id}', (req) => {
  return updateOrder(req.pathParams.id, req.body)
}, {success: 200, error: 400})

api.delete('/orders/{id}', (req) => {
  return deleteOrder(req.pathParams.id)
}, {success: 200, error: 400})

api.post('/delivery', req => updateDeliveryStatus(req.body), {success: 200, error: 400})

module.exports = api
