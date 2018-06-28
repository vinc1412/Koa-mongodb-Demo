var dbConnection =  require('../helper/dbConnection.js')
var collectionName = 'users'


async function insertUser(testUser){
	var db = await dbConnection.insertOneRecord(collectionName, testUser)
}


module.exports = {
	insertUser: insertUser
}