const express = require('express')
const db = require('../services/genderService')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { name } = req.body

    db.createGender(name)
    res.status(201).send({ message: 'Genero criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const gender = await db.searchGender()
    res.status(200).send(gender)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/', (req, res) => {
  try {
    const { name, id } = req.body

    db.editGender(name, id)
    res.status(201).send({ message: 'Genero editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

routes.delete('/:id', (req, res) => {
  try {
    const { id } = req.params

    db.deleteGender(id)

    res.status(201).send({ message: 'Genero deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

module.exports = routes
