const errorType = require('../constants/errorType')

const errorHandler = (error, ctx) => {
  let status, msg

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      msg = 'Username Or Password Cannot Be Empty!'
      break
    case errorType.USER_HAS_ALREADY_EXISTS:
      status = 409 // Conflict
      msg = 'User Has Already Exists!'
      break
    case errorType.USER_DOES_NOT_EXISTS:
      status = 400
      msg = 'User Does Not Exists!'
      break
    case errorType.PASSWORD_IS_WRONG:
      status = 400
      msg = 'Password Was Wrong!'
      break
    default:
      status = 404
      msg = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = msg
}

module.exports = errorHandler
