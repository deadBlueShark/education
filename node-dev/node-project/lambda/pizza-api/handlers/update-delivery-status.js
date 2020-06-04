'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = function updateDeliveryStatus(req) {
  if (!req.deliveryId || !req.deliveryStatus)
    throw new Error('Status and delivery status are required')

  let params = {
    TableName: 'pizza-orders',
    Key: {
      orderId: req.deliveryId
    },
    AttributeUpdates: {
      status: {
        Action: 'PUT',
        Value: req.deliveryStatus
      }
    }
  }

  return docClient.update(params).promise().then(result => result)
}
