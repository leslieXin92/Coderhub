const errorType = require('@/constants/errorType')

const errorHandler = (error, ctx) => {
  ctx.status = errorType[error.message]?.status ?? 500
  ctx.body = errorType[error.message]?.message ?? 'Unknown Error'
}

module.exports = errorHandler
