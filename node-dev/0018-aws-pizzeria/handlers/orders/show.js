'use strict'

const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

async function getOrder(orderId) {
  let query = {
    TableName: 'pizza-orders',
    Key: {
      orderId: orderId
    }
  }

  let order = (await documentClient.get(query).promise()).Item

  return order
  // OR return documentClient.get(query).promise().then(res => res.Item)
}

module.exports = getOrder
