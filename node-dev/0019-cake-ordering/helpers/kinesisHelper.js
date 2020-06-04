'use strict'

module.exports.getRecordsFromEvent = (event) => {
  return event.Records.map(_parsePayload)
}

function _parsePayload(record) {
  return JSON.parse(new Buffer(record.kinesis.data, 'base64').toString('utf8'))
}

module.exports.filterOrderByType = (order, type) => {
  return order.event === type
}
