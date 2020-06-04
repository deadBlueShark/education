const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const deliveredAgent = 'https://some-like-it-hot.effortless-serverless.com/delivery'

let deleteOrder = (orderId) => {
  if (!orderId)
    throw new Error('Order ID must be provided')

  let params = {
    TableName: 'pizza-orders',
    Key: {orderId}
  }

  return docClient.get(params).promise()
    .then(result => result.Item)
    .then(item => {
      if (item.status !== 'pending')
        throw new Error('Only delete pending order')

      return rp.delete(`${deliveredAgent}/${orderId}`, {
        headers: {
          "Authorization": "aunt-marias-pizzeria-1234567890",
          "Content-type": "application/json"
        }
      })
    }).then(() => {
      return docClient.delete(params).promise()
    })
}

module.exports = deleteOrder
