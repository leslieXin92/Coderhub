const momentService = require('@/service/momentService')

class MomentController {
  async create(ctx, next) {
    // 获取数据
    const userId = ctx.user.id
    const { content } = ctx.request.body
    // 入库返回
    ctx.body = await momentService.create(userId, content)
  }
}

module.exports = new MomentController()
