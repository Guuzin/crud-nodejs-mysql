const express = require('express')
const db = require('../services/bookService')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { name, author, availability, gender } = req.body

    db.createBook(name, author, availability, gender)
    res.status(201).send({ message: 'Livro criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const book = await db.searchBook()
    res.status(200).send(book)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/', (req, res) => {
  try {
    const { name, author, availability, gender, id } = req.body

    db.editBook(name, author, availability, gender, id)
    res.status(201).send({ message: 'Livro editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.delete('/:id', (req, res) => {
  try {
    const { id } = req.params

    db.deleteBook(id)

    res.status(201).send({ message: 'Livro deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

module.exports = routes
