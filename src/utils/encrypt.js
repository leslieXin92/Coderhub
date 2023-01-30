const crypto = require('crypto')

const encrypt = (string) => {
  const md5 = crypto.createHash('md5')
  return md5.update(string).digest('hex')
}

module.exports = encrypt
