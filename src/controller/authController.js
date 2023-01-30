class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body
    ctx.body = `${name} login success!`
  }
}

module.exports = new AuthController()
