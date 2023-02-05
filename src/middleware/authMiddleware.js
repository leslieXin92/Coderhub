const jwt = require('jsonwebtoken')
const userService = require('@/service/userService')
const authService = require('@/service/authService')
const encrypt = require('@/utils/encrypt')
const { PUBLIC_KEY } = require('@/app/config')

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
  ctx.user = user
  await next()
}

const verifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const err = new Error('unauthorized')
    return ctx.app.emit('error', err, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  // 验证token
  try {
    ctx.user = jwt.verify(token, PUBLIC_KEY, {
      algorithm: ['RS384']
    })
    await next()
  } catch (e) {
    console.log(e.message)
    const err = new Error('unauthorized')
    ctx.app.emit('error', err, ctx)
  }
}

const verifyPermission = async (ctx, next) => {
  const { momentId } = ctx.params
  const { id } = ctx.user
  // 查看是否拥有权限
  try {
    const isPermission = await authService.checkMoment(momentId, id)
    if (!isPermission) throw new Error()
    await next()
  } catch (e) {
    const err = new Error('you_does_not_have_access')
    return ctx.app.emit('error', err, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
}
