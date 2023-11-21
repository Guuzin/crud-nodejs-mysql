const database = require('../config/db')

async function createGender(name) {
  const sql = `insert into genero (genero)
      values (?)`
  const dataGender = [name]

  const connect = await database.connect()
  await connect.query(sql, dataGender)
  connect.end()
}

async function searchGender(id, name) {
  const sql = `SELECT * FROM genero`
  const dataGender = [id, name]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataGender)
  connect.end()
  return rows
}

async function editGender(name, id) {
  const sql = `UPDATE genero
  SET genero = ?
  WHERE id = ?`
  const dataGender = [name, id]

  const connect = await database.connect()
  await connect.query(sql, dataGender)
  connect.end()
}

async function deleteGender(id) {
  const sql = `DELETE FROM genero WHERE id = ?`

  const dataGender = [id]

  const connect = await database.connect()
  await connect.query(sql, dataGender)
  connect.end()
}

module.exports = { createGender, searchGender, editGender, deleteGender }
