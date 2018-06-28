var MongoClient =  require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'
var dbName = 'koaDemo'



async function init(){
	console.log('init DB')
	return await createDatabase()
}

async function insertOneRecord(collectionName,userData){
	var db = await init()
	return new Promise((resolve,reject)=>{
		var dbo = db.db(dbName)
		dbo.collection(collectionName).insertOne(userData,function(err,res){
			if(err){
				return reject(err)
			}else{
				console.log("1 document inserted")
				db.close()
				console.log('db closed')
				return resolve(res)
			}
		})
	})	
}

function createDatabase(){
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url,function(err,db){
			if(err){
				return reject(err)
			}else{
				console.log('Database '+dbName+' created')
				return resolve(db)
			}
		})
	})
}

module.exports = {
	insertOneRecord: insertOneRecord
}

