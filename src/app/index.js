const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const useRoutes = require('../router')
const errorHandler = require('./errorHandler')

const app = new Koa()

app.use(bodyParse())
useRoutes(app)

app.on('error', errorHandler)

module.exports = app
