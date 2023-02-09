// 动态接口
const Router = require('koa-router')
const { verifyAuth, verifyPermission } = require('@/middleware/authMiddleware')
const { verifyLabel } = require('@/middleware/labelMiddleware')
const { create, list, detail, update, remove, addLabel, fileInfo } = require('@/controller/momentController')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
momentRouter.post('/:momentId/label', verifyAuth, verifyPermission, verifyLabel, addLabel)
momentRouter.get('/:momentId/:filename', fileInfo)

module.exports = momentRouter
