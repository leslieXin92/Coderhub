// 登录接口
const Router = require('koa-router')
const { verifyLogin, verifyAuth } = require('@/middleware/authMiddleware')
const { login, getUser } = require('@/controller/authController')

const AuthRouter = new Router()

AuthRouter.post('/login', verifyLogin, login)
AuthRouter.get('/test', verifyAuth, getUser)

module.exports = AuthRouter
