const connection = require('@/app/database')

class AuthService {
  async checkMoment(momentId, userId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`
    const [res] = await connection.execute(statement, [momentId, userId])
    return !!res.length
  }
}

module.exports = new AuthService()
