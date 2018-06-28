var dbConnection =  require('../helper/dbConnection.js')
var collectionName = 'users'


async function insertUser(testUser){
	var db = await dbConnection.insertOneRecord(collectionName, testUser) 
		.then(data=>{
			console.log('insert on record done' + data)
		})
		.catch(err=>{
			console.log(err)
		})
}


module.exports = {
	insertUser: insertUser
}