'use strict'

function deleteOrder(orderId) {
  if (!orderId) {
    throw new Error('No order ID provided')
  }

  return {}
}

module.exports = deleteOrder
