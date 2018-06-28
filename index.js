const Koa = require('koa')
const app = new Koa()
const fs =  require('fs')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')


var test =  require('./app/service/userService.js')

function render(page){
	return new Promise ((resolve,reject)=>{
		let viewUrl = `./view/${page}`
		fs.readFile (viewUrl,'binary',(err,data)=>{
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

//sub router 1
let home = new Router()
home.get('/',async (ctx)=>{
	let html = await render('index.html')
	ctx.body = html
})

//sub router 2
let page = new Router()
page.get('/404', async (ctx)=>{
	let html = await render('404.html')
	ctx.body = html
}).get('/helloworld', async(ctx)=>{
	ctx.body = 'Hello World'
})

//Load sub routers
let router = new Router()
router.use('/',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),home.allowedMethods())


app.use(router.routes()).use(router.allowedMethods())

//static
const staticPath = './static'
app.use(static(path.join(__dirname,staticPath)))


var testUser = {
	userName:'user1',
	userPassword:'password',
	insertDate:'2018-06-26'
}

test.insertUser(testUser)

app.listen(3000)
console.log('demo is starting at port 3000')