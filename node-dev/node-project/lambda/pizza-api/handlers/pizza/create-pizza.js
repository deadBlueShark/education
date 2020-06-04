const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

module.exports = function createPizza(params) {
  if (!params || !params.name || !params.ingredients)
    throw new Error('Must provide required params')

  let pizza = {
    TableName: 'pizzas',
    Item: {
      pizzaId: uuid(),
      name: params.name,
      ingredients: params.ingredients.split(',').map((e) => e.trim())
    }
  }

  return docClient.put(pizza).promise().then((res) => res).catch((err) => err)
}
