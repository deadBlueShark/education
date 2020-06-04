'use strict';

/* Generate WHERE clause */
exports.editWhere = function (sWhere, sConjunction) {
  var sW = ''

  if (sWhere === ''){
    sW = ' WHERE'
  } else {
    sW = sWhere + ' ' + sConjunction
  }

  return sW
}

/* Generate errors response */
exports.editErr = function (sResponseCode, sErrorMessage, sParam, sReason) {
  var sN = {
    responseCode: sResponseCode,
    errorMessage: sErrorMessage,
    errorList: { param: sParam, reason: sReason }
  }
  return JSON.stringify(sN)
}

/* Return target status from processing class */
/* For apps */
exports.getSyutokuItem = function (syutokuKbn) {
  // List of orders: orders, acceptance, rejection (not required on the application side),
  // in process, before completion, cancellation
  // 00: Command, 01: Accept, 02: Reject, 03: In process, 04: Before completion,
  // 10: Cancel, 11: Not reached, 90: Complete, 91: Re-commanded, 92: Cancel confirmation

  var sN = ''

  switch (syutokuKbn) {
    case '1':
      sN = sN + ' \'00\''
      sN = sN + ',\'01\''
      sN = sN + ',\'03\''
      sN = sN + ',\'04\''
      sN = sN + ',\'10\''
      sN = sN + ',\'11\''
      break
    case '2':
      sN = sN + ' \'90\''
      sN = sN + ',\'91\''
      sN = sN + ',\'92\''
      break
    default:
      break
  }

  return sN
}

/* Return target status from processing class */
/* For command PC */
exports.getSiSyutokuItem = function (syutokuKbn) {
  var sN = ''

  switch (syutokuKbn) {
    case '1':
      sN = sN + ' \'01\''
      sN = sN + ',\'03\''
      sN = sN + ',\'04\''
      sN = sN + ',\'10\''
      break
    case '2':
      sN = sN + ' \'00\''
      sN = sN + ',\'02\''
      sN = sN + ',\'11\''
      break
    case '3':
      sN = sN + ' \'90\''
      sN = sN + ',\'91\''
      sN = sN + ',\'92\''
      break
    default:
      break
  }

  return sN
}

/* Determine if it is an array */
exports.isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

/* Determine if it is null */
exports.isNull = function (obj) {
  if (obj === undefined) {
    return false
  }
  if (obj === ''){
    return false
  }
  if (obj === null){
    return true
  }

  if((typeof obj) == 'string'){
    if(obj.toLowerCase() == 'null' ){
      return true
    }
  }
  return false
}

/* Returns the specified date in YYYYMMDD format */
exports.getYYYYMMDDString = function (odATE) {
  var dt = new Date(odATE)
  var yyyymmdd = dt.getFullYear() + ("0" + (dt.getMonth() + 1)).slice(-2) + ("0" + dt.getDate()).slice(-2)

  return yyyymmdd
}

/* Returns the specified date in HHMMSS format */
exports.getHHMMSSString = function (odATE) {
  var dt = new Date(odATE)
  var HHMMSS = ("0" + (dt.getHours() + 1)).slice(-2) + ("0" + (dt.getMinutes() + 1)).slice(-2) + ("0" + dt.getSeconds()).slice(-2)

  return HHMMSS
}

exports.manualLowercase = function (s) {
  return s.replace(/[A-Z]/g, function(ch) {
    return String.fromCharCode(ch.charCodeAt(0) | 32)
  })
}

exports.manualUppercase = function (s) {
  return s.replace(/[a-z]/g, function(ch) {
    return String.fromCharCode(ch.charCodeAt(0) & ~32)
  })
}

/* Returns the specified string with the settings required for SQL */
exports.getSqlChar = function (obj) {
  /* Determine if it is null */
  var sql = ''
  if (this.isNull(obj)) {
   sql += 'null'
   return sql
  }

  sql += '\'' + obj + '\''
  return sql
}

/* Returns the specified number with the settings required for SQL */
exports.getSqlInt = function (obj) {
  /* Determine if it is null */
  var sql = ''
  if (this.isNull(obj)) {
   sql += 'null'
   return sql
  }

  sql +='' + obj + ''
  return sql
}

/* SQL injection measures */
exports.SqlIjCounter = function (obj) {
  var reobj = ''

  switch (typeof obj) {
    case 'string':
      reobj = obj
      reobj = reobj.replace( /\"/g , "\"\"" )
      reobj = reobj.replace( /\'/g , "\'\'" )
      reobj = reobj.replace( /\r?/g , "" )
      break
    case 'number':
      reobj = obj
      break
    case 'boolean':
      reobj = obj
      break
    case 'undefined':
      reobj = obj
      break
    case 'null':
      reobj = obj
      break
  }

  return reobj
}
