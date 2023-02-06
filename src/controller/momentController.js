const momentService = require('@/service/momentService')

class MomentController {
  async create(ctx) {
    const userId = ctx.user.id
    const { content } = ctx.request.body
    ctx.body = await momentService.create(userId, content)
  }

  async detail(ctx) {
    const { momentId } = ctx.params
    ctx.body = await momentService.getMomentById(momentId)
  }

  async list(ctx) {
    const { offset, size } = ctx.query
    ctx.body = await momentService.getMomentList(offset, size)
  }

  async update(ctx) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body
    ctx.body = await momentService.update(content, momentId)
  }
}

module.exports = new MomentController()
