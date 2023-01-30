const service = require('@/service/userService')

class UserController {
  async create(ctx, next) {
    const userInfo = ctx.request.body
    ctx.body = await service.create(userInfo)
  }
}

module.exports = new UserController()
