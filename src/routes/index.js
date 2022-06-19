var router = require('express').Router()

router.get('/health', (req, res) => {
  res.json({
    name: 'Covidatata Webapp',
    version: 'v1.0.0',
    check: true,
  })
})

module.exports = router
