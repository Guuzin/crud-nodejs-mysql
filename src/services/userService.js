const database = require('../config/db')

async function createUser(id, name) {
  const sql = `insert into usuario (id, nome)
      values (?, ?)`
  const dataUser = [id, name]

  const connect = await database.connect()
  await connect.query(sql, dataUser)
  connect.end()
}

async function searchUser(id, name) {
  const sql = `SELECT * FROM usuario`
  const dataUser = [id, name]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataUser)
  connect.end()
  return rows
}

module.exports = { createUser, searchUser }
