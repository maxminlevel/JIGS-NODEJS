const _ = require('lodash')

const start = async (ctx) => {
  const {
    instances: {cron},
  } = ctx
  // cron.schedule('*/2 * * * * *', () => {
  //   console.log('running a task every two seconds')
  // })
}

module.exports = {start}
