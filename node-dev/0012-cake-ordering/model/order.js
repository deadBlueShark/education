'use strict'

const uuidv1 = require('uuid/v1')
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

const TABLE_NAME = process.env.orderTableName

module.export.createOrder = orderData => {
  let order = {
    ...orderData,
    ...{orderId: uuidv1(), date: Date.now(), event: 'init_order'}
  }

  return order
}

module.export.placeOrder = order => {
  let params = {
    TableName: TABLE_NAME,
    Item: order
  }

  return dynamo.put(params).promise()
}
