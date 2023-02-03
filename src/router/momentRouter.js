const Router = require('koa-router')
const { verifyAuth } = require('@/middleware/authMiddleware')
const { create } = require('@/controller/momentController')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter
