const commentService = require('@/service/commentService')

class CommentController {
  async create(ctx) {
    const { id } = ctx.user
    const { momentId, content } = ctx.request.body
    ctx.body = await commentService.create(id, momentId, content)
  }

  async reply(ctx) {
    const { id } = ctx.user
    const { momentId, content } = ctx.request.body
    const { commentId } = ctx.params
    ctx.body = await commentService.reply(id, momentId, commentId, content)
  }

  async update(ctx) {
    const { content } = ctx.request.body
    const { commentId } = ctx.params
    ctx.body = await commentService.update(commentId, content)
  }

  async remove(ctx) {
    const { commentId } = ctx.params
    ctx.body = await commentService.remove(commentId)
  }
}

module.exports = new CommentController()
