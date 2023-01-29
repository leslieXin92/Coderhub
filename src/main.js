const app = require('./app')
const config = require('./app/config')

app.listen(config.APP_PORT, () => {
  console.log(`coderhub service start on port ${config.APP_PORT}!`)
})
