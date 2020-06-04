const MongoClient = require('mongodb').MongoClient

let dbUrl = 'mongodb://localhost:27017/users'

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    throw new Error(err)
  }
  console.log(db)
  db.close()
})
