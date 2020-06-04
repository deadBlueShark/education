const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = function updateDelivery(deliveryId, updates) {
  if (!deliveryId || !updates)
    throw new Error('Must provide id and update info')

  let nosql = 'set '
  let params = {}

  if (updates.deliveryAddress) {
    nosql += 'deliveryAddress = :da,'
    params[':da'] = updates.deliveryAddress
  } else if (updates.pickupAddress) {
    nosql += 'pickupAddress = :pa,'
    params[':pa'] = updates.pickupAddress
  } else if (updates.pickupTime) {
    nosql += 'pickupTime = :pt,'
    params[':pt'] = updates.pickupTime
  } else if (updates.status) {
    nosql += 'deliveryStatus = :st,'
    params[':st'] = updates.status
  }

  let update = {
    TableName: 'deliveries',
    Key: {deliveryId},
    UpdateExpression: nosql.slice(0, nosql.length - 1),
    ExpressionAttributeValues: params,
    ReturnValues: 'ALL_NEW'
  }

  return docClient.update(update).promise().then(res => res.Attributes).catch((err) => {throw err})
}
