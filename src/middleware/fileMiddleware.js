const multer = require('koa-multer')
const { AVATAR_PATH, PICTURE_PATH } = require('@/constants/filePath')

const avatarUpload = multer({ dest: AVATAR_PATH })
const savaAvatarFile = avatarUpload.single('avatar')

const pictureUpload = multer({ dest: PICTURE_PATH })
const savaPictureFile = pictureUpload.array('picture', 9)

module.exports = {
  savaAvatarFile,
  savaPictureFile
}
