const multer = require('koa-multer')
const { AVATAR_PATH } = require('@/constants/filePath')

const avatarUpload = multer({
  dest: AVATAR_PATH
})

const savaAvatarFile = avatarUpload.single('avatar')

module.exports = {
  savaAvatarFile
}
