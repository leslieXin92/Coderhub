const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('@/app/config')

class AuthController {
  async login(ctx) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS384'
    })
    ctx.body = { id, name, token }
  }

  async getUser(ctx) {
    const { name } = ctx.user
    ctx.body = `${name} is login!`
  }
}

module.exports = new AuthController()
