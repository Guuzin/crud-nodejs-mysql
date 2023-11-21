const express = require('express')
const db = require('../services/userService')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { id, name } = req.body

    db.createUser(id, name)
    res.status(201).send({ message: 'Usuario criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const user = await db.searchUser()
    res.status(200).send(user)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
