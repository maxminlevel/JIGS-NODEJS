var router = require('express').Router()
const db = require('../testdb')

router.get('/', db.getUsers)
router.get('/:id', db.getUserById)
router.post('/', db.createUser)
router.put('/:id', db.updateUser)
router.delete('/:id', db.deleteUser)

module.exports = router
