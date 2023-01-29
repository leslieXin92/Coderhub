const errorType = require('../constants/errorType')
const userService = require('../service/userService')
const md5Password = require('../utils/handlePassword')

const verifyUserInfo = async (ctx, next) => {
  // 获取userInfo
  const { name, password } = ctx.request.body
  // 错误处理
  if (!name || !password) {
    const err = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', err, ctx)
  }
  // 是否已被注册
  const res = await userService.getUserInfoByName(name)
  if (res.length) {
    const err = new Error(errorType.USER_HAS_ALREADY_EXISTS)
    return ctx.app.emit('error', err, ctx)
  }
  await next()
}

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5Password(password)
  await next()
}

module.exports = {
  verifyUserInfo,
  handlePassword
}
