'use strict'

const AWS = require('aws-sdk')
let { uuid } = require('uuidv4')
let dynamo = new AWS.DynamoDB.DocumentClient()
let kinesis = new AWS.Kinesis()

const ORDER_TABLE = process.env.ORDER_TABLE
const ORDER_STREAM = process.env.ORDER_STREAM

module.exports.create = orderData => {
  let order = {
    ...orderData,
    ...{orderId: uuid(), date: Date.now(), event: 'init_order'}
  }

  return order
}

module.exports.placeOrder = async order => {
  await _createOrder(order)

  console.log('[Order Created] Start push data to Kinesis Data Stream:')
  await _pushOrderToKinesisDataStream(order)
}

module.exports.fulfillOrder = async (orderId, fulfillmentId) => {
  let params = {
    TableName: ORDER_TABLE,
    Key: { orderId },
    UpdateExpression: 'SET fulfillmentId = :fId, fulfillDate = :fDate, event = :event',
    ExpressionAttributeValues: {
      ':fId': fulfillmentId,
      ':fDate': Date.now(),
      ':event': 'order_fulfilled'
    }
  }

  await dynamo.update(params).promise()

  params = {
    TableName: ORDER_TABLE,
    Key: { orderId }
  }

  let order = await dynamo.get(params).promise()
  console.log('GET ORDER: ', order)

  console.log('[Order Fulfilled] Start push data to Kinesis Data Stream:')
  await _pushOrderToKinesisDataStream({orderId, fulfillmentId})
}

async function _createOrder(order) {
  let orderRecord = {
    TableName: ORDER_TABLE,
    Item: order
  }

  return dynamo.put(orderRecord).promise().then((dynamoData) => {
    console.log('Order created success: ', dynamoData)
    return dynamoData
  }).catch((dynamoErr) => {
    console.log('[DynamoDB] There were erros: ', dynamoErr)
    return null
  })
}

async function _pushOrderToKinesisDataStream(order) {
  let orderData = {
    Data: JSON.stringify(order),
    PartitionKey: order.orderId,
    StreamName: ORDER_STREAM
  }

  return kinesis.putRecord(orderData).promise().then((kinesisData) => {
    console.log('Push data to KDS success: ', kinesisData)
  }).catch((kinesisErr) => {
    console.log('[Kinesis] There were errors: ', kinesisErr)
  })
}
