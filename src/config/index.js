const {assignObjOnce} = require('../helpers/object')

const init = (rawConfig = {}) => {
  return assignObjOnce(
    {},
    {
      config: require('dotenv').config().parsed,
      instances: {},
    },
    {...rawConfig}
  )
}

module.exports = {init}
