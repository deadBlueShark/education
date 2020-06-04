'use strict'

const pg = require('pg')
const expDbSet = require('./db.js')
const expCom = require('./common.js')

module.exports.hello = async (event, context, callback)=>{
  var config = expDbSet.getDbConnectSetting()

  console.log('config:', config)
  console.log('Received event:', JSON.stringify(event, null, 2))

  context.callbackWaitsForEmptyEventLoop = false

  // Validate params
  {
    if (event.keibicoid === undefined || event.keibicoid === '' || expCom.isNull(event.keibicoid)) {
      var errParm = expCom.editErr(400, 'Security company ID is required', 'keibicoid', 'undefined')
      console.log('Err info:', errParm)
      callback(errParm)
      return
    }

    if (event.tikuCode === undefined || event.tikuCode === '' || expCom.isNull(event.tikuCode)) {
      var errParm = expCom.editErr(400, 'District code is required.', 'tikucode', 'undefined')
      console.log('Err info:', errParm)
      callback(errParm)
      return
    }
  }

  context.succeed({ keibicoid: event.keibicoid, tikucode: event.tikucode })
}
