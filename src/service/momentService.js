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
        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) AS author,
        IF(COUNT(label.id), JSON_ARRAYAGG(JSON_OBJECT('id', label.id, 'name', label.name)), NULL) AS labels,
        (SELECT
          IF(COUNT(comment.id), JSON_ARRAYAGG(JSON_OBJECT(
            'id', comment.id,
            'commentId', comment.comment_id,
            'content', comment.content,
            'createTime', comment.createAt,
            'updateTime', comment.updateAt,
            'user', JSON_OBJECT('id', cu.id, 'name', cu.name, 'avatarUrl', cu.avatar_url)
          )), NULL)
        FROM comment
          LEFT JOIN user AS cu ON comment.user_id = cu.id
        WHERE moment.id = comment.moment_id) AS comments
      FROM moment
        LEFT JOIN user AS u ON moment.user_id = u.id
        LEFT JOIN moment_label ON moment_label.moment_id = moment.id
        LEFT JOIN label ON label.id = moment_label.label_id
      WHERE moment.id = ?
      GROUP BY moment.id;
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

  async checkLabelIsExists(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`
    const [res] = await connection.execute(statement, [momentId, labelId])
    return !!res.length
  }

  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`
    const [res] = await connection.execute(statement, [momentId, labelId])
    return res
  }
}

module.exports = new MomentService()
