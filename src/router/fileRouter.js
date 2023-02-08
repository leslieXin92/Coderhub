const Router = require('koa-router')
const { verifyAuth } = require('@/middleware/authMiddleware')
const { savaAvatarFile } = require('@/middleware/fileMiddleware')
const { savaAvatarInfo} = require('@/controller/fileController')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, savaAvatarFile, savaAvatarInfo)

module.exports = fileRouter
