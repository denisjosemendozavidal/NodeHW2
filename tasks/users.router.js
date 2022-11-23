const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)

router.post('/users', userServices.postUser)

router.delete('/users/:id', userServices.removeUser)

router.get('/users/:id', userServices.getUserById)


module.exports = router