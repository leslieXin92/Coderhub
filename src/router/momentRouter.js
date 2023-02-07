// 动态接口
const Router = require('koa-router')
const { verifyAuth, verifyPermission } = require('@/middleware/authMiddleware')
const { create, list, detail, update, remove, addLabel } = require('@/controller/momentController')
const { verifyLabel } = require('@/middleware/labelMiddleware')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
momentRouter.post('/:momentId/label', verifyAuth, verifyPermission, verifyLabel, addLabel)

module.exports = momentRouter
