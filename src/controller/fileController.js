const fileService = require('@/service/fileService')
const userService = require('@/service/userService')
const { APP_HOST, APP_PORT } = require('@/app/config')

class FileController {
  async savaAvatarInfo(ctx) {
    const { id: userId } = ctx.user
    const { filename, mimetype, size } = ctx.req.file
    const avatarUrl = `${APP_HOST}:${APP_PORT}/user/${userId}/avatar`
    await userService.updateAvatarUrlByUserId(userId, avatarUrl)
    await fileService.savaAvatarInfo(filename, mimetype, size, userId)
    ctx.body = 'avatar upload success!'
  }

  async savaPictureInfo(ctx) {
    const { id: userId } = ctx.user
    const { momentId } = ctx.query
    const { files } = ctx.req
    for (let file of files) {
      const { filename, mimetype, size } = file
      await fileService.savaPictureInfo(filename, mimetype, size, userId, momentId)
    }
    ctx.body = 'picture upload success!'
  }
}

module.exports = new FileController()
