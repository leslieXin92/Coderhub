const commentService = require('@/service/commentService')

class CommentController {
  async create(ctx) {
    const { id: userId } = ctx.user
    const { momentId, content } = ctx.request.body
    ctx.body = await commentService.create(userId, momentId, content)
  }

  async reply(ctx) {
    const { id:userId } = ctx.user
    const { commentId } = ctx.params
    const { momentId, content } = ctx.request.body
    ctx.body = await commentService.reply(userId, momentId, commentId, content)
  }

  async update(ctx) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body
    ctx.body = await commentService.update(commentId, content)
  }

  async remove(ctx) {
    const { commentId } = ctx.params
    ctx.body = await commentService.remove(commentId)
  }

  async list(ctx) {
    const { commentId } = ctx.query
    ctx.body = await commentService.getCommentById(commentId)
  }
}

module.exports = new CommentController()
