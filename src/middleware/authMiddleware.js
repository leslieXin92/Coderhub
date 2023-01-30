const userService = require('@/service/userService')
const encrypt = require('@/utils/encrypt')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判空处理
  if (!name || !password) {
    const err = new Error('name_or_password_is_required')
    return ctx.app.emit('error', err, ctx)
  }
  // 用户是否存在
  const res = await userService.getUserInfoByName(name)
  const user = res[0]
  if (!user) {
    const err = new Error('user_does_not_exists')
    return ctx.app.emit('error', err, ctx)
  }
  // 密码是否正确
  if (encrypt(password) !== user.password) {
    const err = new Error('password_is_wrong')
    return ctx.app.emit('error', err, ctx)
  }
  await next()
}

module.exports = {
  verifyLogin
}
