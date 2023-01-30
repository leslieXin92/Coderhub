const userService = require('@/service/userService')
const md5Password = require('@/utils/encrypt')

const verifyUserInfo = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判空处理
  if (!name || !password) {
    const err = new Error('name_or_password_is_required')
    return ctx.app.emit('error', err, ctx)
  }
  // 是否已被注册
  const res = await userService.getUserInfoByName(name)
  if (res.length) {
    const err = new Error('user_has_already_exists')
    return ctx.app.emit('error', err, ctx)
  }
  await next()
}

const encryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5Password(password)
  await next()
}

module.exports = {
  verifyUserInfo,
  encryptPassword
}
