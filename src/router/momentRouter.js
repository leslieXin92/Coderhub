const Router = require('koa-router')
const { verifyAuth } = require('@/middleware/authMiddleware')
const { create, list, detail } = require('@/controller/momentController')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

module.exports = momentRouter
