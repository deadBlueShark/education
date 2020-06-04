const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')
const rp = require('minimal-request-promise')

const webhookUrl = 'https://qe1ekuu136.execute-api.ap-southeast-1.amazonaws.com/latest/delivery'

module.exports = function createDelivery(req) {
  if (!req || !req.pickupTime || !req.pickupAddress || !req.deliveryAddress)
    throw new Error('Must supply enough param')

  let deliveryId = uuid()

  console.log("Delivery-Order: in-progress")

  return docClient.put({
    TableName: 'deliveries',
    Item: {
      deliveryId,
      pickupTime: req.pickupTime,
      pickupAddress: req.pickupAddress,
      deliveryAddress: req.deliveryAddress,
      deliveryStatus: 'in-progress'
    }
  }).promise().then((res) => {
    return {deliveryId}
  })
}
