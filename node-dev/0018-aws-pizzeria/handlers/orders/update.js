'use strict'

function updateOrder(orderId, order) {
  if (!orderId || !order || !order.pizzaId || !order.address) {
    throw new Error('Invalid order.')
  }

  return {}
}

module.exports = updateOrder
