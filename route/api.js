const user = require('../app/controller/user.js')
const Router = require('koa-router')

var router = new Router();

user.api(router)

module.exports = router

