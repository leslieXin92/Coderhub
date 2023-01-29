// dotenv会自动读取根目录下的.env文件 并写入process里
const dotenv = require('dotenv')

dotenv.config()

module.exports =
  {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
  }
    = process.env
