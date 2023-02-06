const connection = require('@/app/database')

class CommentService {
  async create(userId, momentId, content) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`
    const [res] = await connection.execute(statement, [content, momentId, userId])
    return res
  }

  async reply(userId, momentId, commentId, content) {
    const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`
    const [res] = await connection.execute(statement, [content, momentId, userId, commentId])
    return res
  }

  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`
    const [res] = await connection.execute(statement, [content, commentId])
    return res
  }

  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`
    const [res] = await connection.execute(statement, [commentId])
    return res
  }
}

module.exports = new CommentService()
