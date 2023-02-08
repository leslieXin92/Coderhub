const fileService = require('@/service/fileService')
const userService = require('@/service/userService')
const { APP_HOST, APP_PORT } = require('@/app/config')

class FileController {
  async savaAvatarInfo(ctx) {
    const { id: userId } = ctx.user
    const { filename, mimetype, size } = ctx.req.file
    const avatarUrl = `${APP_HOST}:${APP_PORT}/user/${userId}/avatar`
    await userService.updateAvatarUrlByUserId(userId, avatarUrl)
    ctx.body = await fileService.savaAvatarInfo(filename, mimetype, size, userId)
  }
}

module.exports = new FileController()
