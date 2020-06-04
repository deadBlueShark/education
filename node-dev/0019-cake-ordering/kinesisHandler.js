'use strict'

const kinesisHelper = require('./helpers/kinesisHelper')
const sesHelper = require('./helpers/sesHelper')

module.exports.notifyCakeProducerOrDeliveryCompany = async event => {
  let orders = kinesisHelper.getRecordsFromEvent(event)
  let placedOrders = orders.filter(order => kinesisHelper.filterOrderByType(order, 'init_order'))
  let fulfilledOrders = orders.filter(order => kinesisHelper.filterOrderByType(order, 'order_fulfilled'))

  console.log('Kinesis Placed Order Data: ', placedOrders)
  if (placedOrders.length) {
    await sesHelper.handleNotifyOrders(placedOrders, 'init_order')
  }

  console.log('Kinesis Fulfilled Order Data: ', fulfilledOrders)
  if (fulfilledOrders.length) {
    await sesHelper.handleNotifyOrders(fulfilledOrders, 'order_fulfilled')
  }
}
