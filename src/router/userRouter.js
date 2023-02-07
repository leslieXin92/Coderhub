// 注册接口
const Router = require('koa-router')
const { verifyUserInfo, encryptPassword } = require('@/middleware/userMiddleware')
const { create } = require('@/controller/userController')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', verifyUserInfo, encryptPassword, create)

module.exports = userRouter

