const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')
const rp = require('minimal-request-promise')

const deliveredAgent = 'https://p4wnduegs1.execute-api.ap-southeast-1.amazonaws.com/latest/deliveries'

let createOrder = (req) => {
  if (!req || !req.pizza || !req.address)
    throw new Error('Provide pizza and address')

  return rp.post(deliveredAgent, {
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pickupTime: '15.34pm',
      pickupAddress: 'Aunt Maria Pizzeria',
      deliveryAddress: req.address
    })
  }).then(res => JSON.parse(res.body))
    .then(res => {
      console.log("Delivery-Order: pending")
      return docClient.put({
        TableName: 'pizza-orders',
        Item: {
          orderId: res.deliveryId,
          pizza: req.pizza,
          address: req.address,
          status: 'pending'
        }
      }).promise()
    }).then(res => res).catch(err => {throw err})
}

module.exports = createOrder

/*
let createOrder = (req) => {
  console.log('ORDER request body: ', req.body)

  const userData = req.context.authorizer.claims
  console.log('ORDER user data', userData)

  let userAddress = req.body && req.body.address
  if (!userAddress) {
    userAddress = JSON.parse(userData.address).formatted
  }

  if (!req.body || !req.body.pizza || !userAddress) {
    throw new Error('Provide pizza and address')
  }


  return rp.post(deliveredAgent, {
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pickupTime: '15.34pm',
      pickupAddress: 'Aunt Maria Pizzeria',
      deliveryAddress: userAddress
    })
  }).then(res => JSON.parse(res.body))
    .then(res => {
      console.log("Delivery-Order: pending")
      return docClient.put({
        TableName: 'pizza-orders',
        Item: {
          orderId: res.deliveryId,
          pizza: req.pizza,
          address: req.address,
          status: 'pending'
        }
      }).promise()
    }).then(res => res).catch(err => {throw err})
}
 */
