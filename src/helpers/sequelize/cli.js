const [, , ...cmds] = process.argv
const {assignObjOnce} = require('../object')
const ctx = require('../../config').init()

const start = async () => {
  const db = require('../../db')
  const {sequelize} = await db.init(ctx)
  assignObjOnce(ctx.instances, {sequelize})
  await db.start(ctx)
  return sequelize
}
const wait = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

const command = async (query, meta = false) => {
  const sequelize = await start()
  // console.log(sequelize.query)
  if (query == 'seed' || query == undefined || query == null || query == '') {
    console.log(
      '-----------------------------Press Ctrl+C to cancel!!!-----------------------------'
    )
    for (let i = ctx.config.CANCEL_TIME; i >= 0; --i) {
      console.log('Seed database in', i.toString(), 's')
      await wait(1200)
    }
    // seed code here

    console.log(
      '-----------------------------------Seed data done-----------------------------------'
    )
  } else {
    console.log(query)
    try {
      const [results, metadata] = await sequelize.query(query)
      console.log(results)
      if (meta) {
        let data = assignObjOnce(
          {},
          {command: metadata.command, rowCount: metadata.rowCount}
        )
        console.log(data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  process.exit(0)
}

if (cmds[1] == '1') {
  command(cmds[0], true)
}
command(cmds[0])
