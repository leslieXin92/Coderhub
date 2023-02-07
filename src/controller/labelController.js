const labelService = require('@/service/labelService')

class LabelController {
  async create(ctx) {
    const { name } = ctx.request.body
    ctx.body = await labelService.create(name)
  }

  async list(ctx) {
    ctx.body = await labelService.list()
  }
}

module.exports = new LabelController()
