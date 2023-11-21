const database = require('../config/db')

async function createBook(name, author, availability, gender) {
  const sql = `insert into livro (nome, autor, disponibilidade, id_genero)
      values (?, ?, ?, ?)`
  const dataBook = [name, author, availability, gender]

  const connect = await database.connect()
  await connect.query(sql, dataBook)
  connect.end()
}

async function searchBook(id, name, author, availability, gender) {
  const sql = `SELECT * FROM livro`
  const dataBook = [id, name, author, availability, gender]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataBook)
  connect.end()
  return rows
}

async function editBook(name, author, availability, gender, id) {
  const sql = `UPDATE livro
  SET nome = ?,
  autor = ?,
  disponibilidade = ?,
  id_genero = ?
  WHERE id = ?`
  const dataBook = [name, author, availability, gender, id]

  const connect = await database.connect()
  await connect.query(sql, dataBook)
  connect.end()
}

async function deleteBook(id) {
  const sql = `DELETE FROM livro WHERE id = ?`

  const dataBook = [id]

  const connect = await database.connect()
  await connect.query(sql, dataBook)
  connect.end()
}

module.exports = { createBook, searchBook, editBook, deleteBook }
