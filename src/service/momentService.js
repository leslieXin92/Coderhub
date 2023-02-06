const connection = require('@/app/database')

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (user_id, content) VALUES (?, ?);`
    const [res] = await connection.execute(statement, [userId, content])
    return res
  }

  async getMomentById(momentId) {
    const statement = `
      SELECT
        moment.id AS id,
        moment.content AS content,
        moment.createAt AS createTime,
        moment.updateAt AS updateTime,
        JSON_OBJECT('id', user.id, 'name', user.name) AS author
      FROM moment
        LEFT JOIN user ON moment.user_id = user.id
      WHERE moment.id = ?;
    `
    const [res] = await connection.execute(statement, [momentId])
    return res[0]
  }

  async getMomentList(offset, size) {
    const statement = `
      SELECT
        moment.id AS id,
        moment.content AS content,
        moment.createAt AS createTime,
        moment.updateAt AS updateTime,
        JSON_OBJECT('id', user.id, 'name', user.name) AS author
      FROM moment
        LEFT JOIN user ON moment.user_id = user.id
      LIMIT ?, ?;
    `
    const [res] = await connection.execute(statement, [offset, size])
    return res
  }

  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`
    const [res] = await connection.execute(statement, [content, momentId])
    return res
  }
}

module.exports = new MomentService()
