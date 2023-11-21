const database = require('../config/db')

async function createLoan(book, user, dateDevolution) {
  const sql = `insert into emprestimo (id_livro, id_usuario, data_devolucao)
      values (?, ?, ?)`
  const dataLoan = [book, user, dateDevolution]

  const connect = await database.connect()
  await connect.query(sql, dataLoan)
  connect.end()
}

async function searchLoan(id, book, user, dateLoan, dateDevolution) {
  const sql = `SELECT * FROM emprestimo`
  const dataLoan = [id, book, user, dateLoan, dateDevolution]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataLoan)
  connect.end()
  return rows
}

async function editLoan(book, user, dateLoan, dateDevolution, id) {
  const sql = `UPDATE emprestimo 
  SET id_livro = ?,
  id_usuario = ?,
  data_emprestimo = ?,
  data_devolucao = ?
  WHERE id = ?`
  const dataLoan = [book, user, dateLoan, dateDevolution, id]

  const connect = await database.connect()
  await connect.query(sql, dataLoan)
  connect.end()
}

async function deleteLoan(id) {
  const sql = `DELETE FROM emprestimo WHERE id = ?`

  const dataLoan = [id]

  const connect = await database.connect()
  await connect.query(sql, dataLoan)
  connect.end()
}

module.exports = { createLoan, searchLoan, editLoan, deleteLoan }
