const _ = require('lodash')

const start = async (ctx) => {
  const {
    instances: {
      sequelize: {
        models: {Test},
      },
    },
  } = ctx
  await Test.create({firstName: 'Jane', lastName: 'Doe'})
  await Test.create({firstName: 'Jane', lastName: 'Doe'})
  await Test.create({firstName: 'Jane', lastName: 'Doe'})
  await Test.create({firstName: 'Jane', lastName: 'Doe'})
}

module.exports = {
  start,
}
