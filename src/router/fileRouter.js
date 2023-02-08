const Router = require('koa-router')
const { verifyAuth } = require('@/middleware/authMiddleware')
const { savaAvatarFile, savaPictureFile } = require('@/middleware/fileMiddleware')
const { savaAvatarInfo, savaPictureInfo } = require('@/controller/fileController')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, savaAvatarFile, savaAvatarInfo)
fileRouter.post('/picture', verifyAuth, savaPictureFile, savaPictureInfo)

module.exports = fileRouter
