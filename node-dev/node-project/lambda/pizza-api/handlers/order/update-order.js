const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

let updateOrder = (orderId, options) => {
  if (!orderId || !options)
    throw new Error('Order ID and update object must be provided')

  let params = {
    TableName: 'pizza-orders',
    Key: {orderId},
    UpdateExpression: 'set pizza = :p, address = :a',
    ExpressionAttributeValues: {
      ':p': options.pizza,
      ':a': options.address
    },
    ReturnValues: 'ALL_NEW'
  }

  return docClient.update(params).promise().then((result) => {
    return result.Attributes
  }).catch((err) => {throw err})
}

module.exports = updateOrder
