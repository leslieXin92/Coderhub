const Router = require('koa-router')

const { login } = require('@/controller/authController')
const { verifyLogin } = require('@/middleware/authMiddleware')

const AuthRouter = new Router()

AuthRouter.post('/login', verifyLogin, login)

module.exports = AuthRouter
