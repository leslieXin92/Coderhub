const momentService = require('@/service/momentService')

class MomentController {
  async create(ctx, next) {
    // 获取数据
    const userId = ctx.user.id
    const { content } = ctx.request.body
    // 入库返回
    ctx.body = await momentService.create(userId, content)
  }

  async detail(ctx, next) {
    const { momentId } = ctx.params
    ctx.body = await momentService.getMomentById(momentId)
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query
    ctx.body = await momentService.getMomentList(offset, size)
  }
}

module.exports = new MomentController()
