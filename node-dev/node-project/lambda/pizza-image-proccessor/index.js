'use strict'

const convert = require('./convert')

function handlerFunction(event, context, callback) {
  const eventRecord = event.Records && event.Records[0]
  console.log("ImageProcessor: ", eventRecord)

  if (eventRecord) {
    if (eventRecord.eventSource === 'aws:s3' && eventRecord.s3) {
      return convert(eventRecord.s3.bucket.name, eventRecord.s3.object.key).then((res) => {
        callback(null, res)
      }).catch(callback)
    }
    return callback('Unsupport Event Source')
  }
  callback("No Records In The Event")
}

exports.handler = handlerFunction
