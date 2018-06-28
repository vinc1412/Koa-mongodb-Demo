const Koa = require('koa')
const app = new Koa()
const fs =  require('fs')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');

const api =  require('./route/api.js')
const page =  require('./route/page.js')

//static
const staticPath = './static'

app.use(static(path.join(__dirname,staticPath)))

//body parser
app.use(bodyParser());

//router
router = new Router()

router.use('/api', api.routes())
router.use('/', page.routes())

app.use(router.routes()).use(router.allowedMethods())	

/*
var testUser = {
	userName:'user1',
	userPassword:'password',
	insertDate:'2018-06-26'
}

test.insertUser(testUser)*/


app.listen(3000)
console.log('demo is starting at port 3000')