const express = require('express')
const db = require('../services/loanService')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { book, user, dateDevolution } = req.body

    db.createLoan(book, user, dateDevolution)
    res.status(201).send({ message: 'Empréstimo feito com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const loan = await db.searchLoan()
    res.status(200).send(loan)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/', (req, res) => {
  try {
    const { book, user, dateLoan, dateDevolution, id } = req.body

    db.editLoan(book, user, dateLoan, dateDevolution, id)
    res.status(201).send({ message: 'Empréstimo editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.delete('/:id', (req, res) => {
  try {
    const { id } = req.params

    db.deleteLoan(id)

    res.status(201).send({ message: 'Empréstimo deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

module.exports = routes
