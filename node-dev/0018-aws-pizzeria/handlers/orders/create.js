'use strict'

const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()
const uuidv4 = require('uuid/v4');

function createOrder(order) {
  if (!order || !order.pizza || !order.address) {
    throw new Error('Invalid order.')
  }

  let itemOrder = {
    TableName: 'pizza-orders',
    Item: Object.assign(order, { orderId: uuidv4(), status: 'pending'})
  }

  return documentClient.put(itemOrder).promise().then(res => {
    console.log('Order is saved: ', res)
  }).catch(err => {
    console.log('Error occurred')
    throw err
  })
}

module.exports = createOrder
