const connection = require('@/app/database')

class AuthService {
  async checkRights(tableName, tableId, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`
    const [res] = await connection.execute(statement, [tableId, userId])
    return !!res.length
  }
}

module.exports = new AuthService()
