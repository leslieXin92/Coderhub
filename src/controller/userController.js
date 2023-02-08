const fs = require('fs')
const userService = require('@/service/userService')
const fileService = require('@/service/fileService')
const { AVATAR_PATH } = require('@/constants/filePath')

class UserController {
  async create(ctx) {
    const userInfo = ctx.request.body
    ctx.body = await userService.create(userInfo)
  }

  async getAvatar(ctx) {
    const { userId } = ctx.params
    const { mimetype, filename } = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${filename}`)
  }
}

module.exports = new UserController()
