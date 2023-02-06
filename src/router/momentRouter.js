const Router = require('koa-router')
const { verifyAuth, verifyPermission } = require('@/middleware/authMiddleware')
const { create, list, detail, update, remove } = require('@/controller/momentController')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

module.exports = momentRouter
