const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

let getPizza = (id) => {
  if (!id) {
    return docClient.scan({
      TableName: 'pizzas'
    }).promise().then((res) => res.Items)
  }

  return docClient.get({
    TableName: 'pizzas',
    Key: {
      pizzaId: id
    }
  }).promise().then((res) => res.Item)
}

module.exports = getPizza
