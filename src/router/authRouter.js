// 登录接口
const Router = require('koa-router')
const { login, loginSuccess } = require('@/controller/authController')
const { verifyLogin, verifyAuth } = require('@/middleware/authMiddleware')

const AuthRouter = new Router()

AuthRouter.post('/login', verifyLogin, login)
AuthRouter.get('/test', verifyAuth, loginSuccess)

module.exports = AuthRouter
