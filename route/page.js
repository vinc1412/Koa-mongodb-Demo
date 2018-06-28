const fs =  require('fs')
const Router = require('koa-router')
const path = require('path')

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

var router = new Router()

router.get('/',async (ctx)=>{
	let html = await render('index.html')
	ctx.body = html
})
.get('/404', async (ctx)=>{
	let html = await render('404.html')
	ctx.body = html
})
.get('/helloworld', async(ctx)=>{
	ctx.body = 'Hello World'
})

module.exports = router