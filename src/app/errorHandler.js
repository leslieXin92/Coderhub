const errorType = require('@/constants/errorType')

const errorHandler = (error, ctx) => {
  ctx.status = errorType[error.message].status
  ctx.body = errorType[error.message].message
}

module.exports = errorHandler
