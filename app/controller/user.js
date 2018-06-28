const user = require('../service/user.js')

const addUser = async (ctx,next)=>{
	const data =  ctx.request.body
	const result = await user.insertUser(data).then(res=>{
		ctx.body={
			success: true,
			status: 200
		}
	}).catch(err=>{
		console.log(err)
	})

}

module.exports = {
	api:(router)=>{
		router.post('/user/add',addUser)
	}
}