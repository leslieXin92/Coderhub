const connection = require('@/app/database')

class UserService {
  async create(userInfo) {
    // 将userInfo存储到数据库中
    const { name, password } = userInfo
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const res = await connection.execute(statement, [name, password])
    // 返回结果
    return res[0]
  }

  async getUserInfoByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const res = await connection.execute(statement, [name])
    return res[0]
  }
}

module.exports = new UserService()
