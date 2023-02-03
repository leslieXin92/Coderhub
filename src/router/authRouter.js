const Router = require('koa-router')

const { login, success } = require('@/controller/authController')
const { verifyLogin, verifyAuth } = require('@/middleware/authMiddleware')

const AuthRouter = new Router()

AuthRouter.post('/login', verifyLogin, login)
AuthRouter.get('/test', verifyAuth, success)

module.exports = AuthRouter
