const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

let getOrder = (id) => {
  if (typeof id === 'undefined') {
    return docClient.scan({
      TableName: 'pizza-orders'
    }).promise().then(result => result.Items)
  }

  return docClient.get({
    TableName: 'pizza-orders',
    Key: {
      orderId: id
    }
  }).promise().then(result => result.Item)
}

module.exports = getOrder
