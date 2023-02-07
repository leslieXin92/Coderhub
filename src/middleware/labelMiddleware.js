const labelService = require('@/service/labelService')

const verifyLabel = async (ctx, next) => {
  const { labels } = ctx.request.body
  const labelList = []
  for (let name of labels) {
    const labelRes = await labelService.getLabelByName(name)
    const label = { name, id: labelRes?.id }
    if (!labelRes) {
      const res = await labelService.create(name)
      label.id = res.insertId
    }
    labelList.push(label)
  }
  ctx.labels = labelList
  await next()
}

module.exports = {
  verifyLabel
}
