/**
 * 参数类型判断
 */

function isString(str) {
  return str.constructor == String
}

function isNull(params) {
  return params==null||params==undefined||params==''
}

function isArray(arr) {
  return arr.constructor == Array
}
module.exports = {
  isString, isNull, isArray
}