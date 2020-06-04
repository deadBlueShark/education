'use strict'

const AWS = require('aws-sdk')
let ses = new AWS.SES({region: process.env.SES_REGION})

const CAKE_PRODUCER_EMAIL = process.env.CAKE_PRODUCER_EMAIL
const CAKE_ORDER_EMAIL = process.env.CAKE_ORDER_EMAIL
const DELIVERY_COMPANY_EMAIL = process.env.DELIVERY_COMPANY_EMAIL

module.exports.handleNotifyOrders = (orders, event_type) => {
  let orderPromises = []

  if (event_type === 'init_order') {
    for (let order of orders) {
      let handledOrder = _notifyCakeProducerByEmail(order)
      orderPromises.push(handledOrder)
    }
  } else {
    for (let order of orders) {
      let handledOrder = _notifyDeliveryCompanyByEmail(order)
      orderPromises.push(handledOrder)
    }
  }

  return Promise.all(orderPromises)
}

function _notifyCakeProducerByEmail(order) {
  let params = {
    Destination: {
      ToAddresses: [CAKE_PRODUCER_EMAIL]
    },
    Message: {
      Body: {
        Text: {
          Data: JSON.stringify(order, null, 2)
        }
      },
      Subject: {
        Data: 'New cake order'
      }
    },
    Source: CAKE_ORDER_EMAIL
  }

  return ses.sendEmail(params).promise().then((data) => data).catch((err) => err)
}

function _notifyDeliveryCompanyByEmail(order) {
  let params = {
    Destination: {
      ToAddresses: [DELIVERY_COMPANY_EMAIL]
    },
    Message: {
      Body: {
        Text: {
          Data: JSON.stringify(order, null, 2)
        }
      },
      Subject: {
        Data: 'Order fulfilled, need deliver'
      }
    },
    Source: CAKE_ORDER_EMAIL
  }

  return ses.sendEmail(params).promise().then((data) => data).catch((err) => err)
}
