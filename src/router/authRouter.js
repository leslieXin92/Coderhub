const Router = require('koa-router')

const AuthRouter = new Router()

const { login } = require('../controller/authController')
const { verifyLogin } = require('../middleware/authMiddleware')

AuthRouter.post('/login', verifyLogin, login)

module.exports = AuthRouter
