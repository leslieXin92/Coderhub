const momentService = require('@/service/momentService')
const { PICTURE_PATH } = require('@/constants/filePath')
const fs = require('fs')

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

  async remove(ctx) {
    const { momentId } = ctx.params
    ctx.body = await momentService.remove(momentId)
  }

  async addLabel(ctx) {
    const { labels } = ctx
    const { momentId } = ctx.params
    for (let label of labels) {
      const isExists = await momentService.checkLabelIsExists(momentId, label.id)
      if (!isExists) {
        await momentService.addLabel(momentId, label.id)
      }
    }
    ctx.body = 'add label to moment success!'
  }

  async fileInfo(ctx) {
    const { filename } = ctx.params
    const { mimetype } = await momentService.getFileInfoByFilename(filename)
    ctx.response.set('content-type', mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`)
  }
}

module.exports = new MomentController()
