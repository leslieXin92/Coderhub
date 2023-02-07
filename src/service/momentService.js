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
        JSON_OBJECT('id', u.id, 'name', u.name) AS author,
        JSON_ARRAYAGG(JSON_OBJECT(
          'id', comment.id,
          'commentId', comment.comment_id,
          'createTime', comment.createAt,
          'updateTime', comment.updateAt,
          'user', JSON_OBJECT('id', cu.id, 'name', cu.name)
        )) AS commentList
      FROM moment
        LEFT JOIN user AS u ON moment.user_id = u.id
        LEFT JOIN comment ON moment.id = comment.moment_id
        LEFT JOIN user AS cu ON cu.id = comment.user_id
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
        JSON_OBJECT('id', user.id, 'name', user.name) AS author,
        (SELECT COUNT(*) FROM comment WHERE comment_id = moment_id) AS commentCount
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

  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`
    const [res] = await connection.execute(statement, [momentId])
    return res
  }
}

module.exports = new MomentService()
