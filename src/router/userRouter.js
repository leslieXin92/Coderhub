const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

const { verifyUserInfo, handlePassword } = require('../middleware/userMiddleware')
const { create } = require('../controller/userController')

userRouter.post('/', verifyUserInfo, handlePassword, create)

module.exports = userRouter

