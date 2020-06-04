'use strict'

const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

async function getOrders() {
  return documentClient.scan({TableName: 'pizza-orders'})
                       .promise().then(res => res.Items)
}

module.exports = getOrders
