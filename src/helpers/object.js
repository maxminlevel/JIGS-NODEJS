const _ = require('lodash')

const assignValueOnce = (obj, prop, value) => {
  obj[prop] = value
  Object.defineProperty(obj, prop, {
    writable: false,
  })
  return obj
}

const assignObjOnce = (obj, src) => {
  _.each(src, (value, prop) => assignValueOnce(obj, prop, value))
  return obj
}

module.exports = {
  assignValueOnce,
  assignObjOnce,
  sort,
}
