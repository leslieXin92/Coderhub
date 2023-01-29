const mysql2 = require('mysql2')
const config = require('./config')

const connection = mysql2.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

connection.getConnection((err, connection) => {
  connection.connect((err) => {
    if (err) return console.log('database connect failure!')
    console.log('database connect success!')
  })
})

module.exports = connection.promise()
