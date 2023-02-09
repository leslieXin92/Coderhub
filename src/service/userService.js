const connection = require('@/app/database')

class UserService {
  async create(userInfo) {
    const { name, password } = userInfo
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const [res] = await connection.execute(statement, [name, password])
    return res
  }

  async getUserInfoByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const [res] = await connection.execute(statement, [name])
    return res
  }

  async updateAvatarUrlByUserId(userId, avatarUrl) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`
    await connection.execute(statement, [avatarUrl, userId])
  }
}

module.exports = new UserService()
