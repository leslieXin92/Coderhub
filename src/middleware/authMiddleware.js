const errorType = require('../constants/errorType')
const userService = require('../service/userService')
const md5Password = require('../utils/handlePassword')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判空处理
  if (!name || !password) {
    const err = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', err, ctx)
  }
  // 用户是否存在
  const res = await userService.getUserInfoByName(name)
  const user = res[0]
  if (!user) {
    const err = new Error(errorType.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', err, ctx)
  }
  // 密码是否正确
  if (md5Password(password) !== user.password) {
    const err = new Error(errorType.PASSWORD_IS_WRONG)
    return ctx.app.emit('error', err, ctx)
  }
  await next()
}

module.exports = {
  verifyLogin
}
