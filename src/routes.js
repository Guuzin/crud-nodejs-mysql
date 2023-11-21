const express = require('express')
const userController = require('./controllers/userController')
const genderController = require('./controllers/genderController')
const bookController = require('./controllers/bookController')
const loanController = require('./controllers/loanController')

const routes = express()

routes.get('/', (req, res) => {
  res.send({ hello: 'world!' })
})

routes.use('/user', userController)

routes.use('/gender', genderController)

routes.use('/book', bookController)

routes.use('/loan', loanController)

module.exports = routes
