'use strict'

const orderManager = require('./model/order')

/*
order params sample
{
  "customer": "Le Chi Nguyen",
  "address": "85A PVD, DN",
  "coupon": "APFREE",
  "items": [
    { "name": "Pizza", "amount": 3 }
  ]
}
*/
module.exports.createOrder = async event => {
  let order = orderManager.create(JSON.parse(event.body))
  await orderManager.placeOrder(order)

  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Order created', order: order}, null, 2)
  }
}

/*
fulfil order params sample
{ "orderId": "44bd9sd", "fulfillmentId": "323" }
*/
module.exports.fulfillOrder = async event => {
  let params = JSON.parse(event.body)
  let orderId = params.orderId
  let fulfillmentId = params.fulfillmentId

  orderManager.fulfillOrder(orderId, fulfillmentId)
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Order fulfilled'}, null, 2)
  }
}
