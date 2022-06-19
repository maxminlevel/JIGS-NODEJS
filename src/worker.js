const {glob} = require('glob')
const _ = require('lodash')
const path = require('path')
var cron = require('node-cron')
const {assignObjOnce} = require('./helpers/object')

const start = async (ctx) => {
  assignObjOnce(ctx.instances, {cron})
  const workerPath = path.resolve(__dirname, 'workers')
  const workerFiles = glob.sync(path.join(workerPath, '**/*.worker.js'), {
    dot: true,
  })
  _.each([...workerFiles], async (filePath) => {
    const worker = require(filePath)
    const {name: workerName} = path.parse(filePath)
    const name = _.replace(workerName, /(^index$)|(\.worker$)/, '')
    console.log(`-> worker: ${name}`)
    worker.start(ctx)
  })
}

module.exports = {start}
