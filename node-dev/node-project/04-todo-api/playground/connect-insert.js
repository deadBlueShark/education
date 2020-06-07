//const MongoClient = require('mongodb').MongoClient;
// new syntax ES6: Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

const dbName = "todoapp";
//const dbUrl = "mongodb://admin:admin@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin";
const dbUrl = "mongodb://localhost:27017/todoapp";


const client = new MongoClient(dbUrl, {useNewUrlParser: true});

client.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);

/*
  const collection = db.collection("todos");
  collection.insertOne({
    text: "Learning NodeJS",
    status: "Completed"
  }, (err, result) => {
    if (err) return console.log(err);
    console.log(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result.ops, null, 2));
  })
*/


  const collection = db.collection("users");
  collection.insertOne({
    name: "pogba",
    age: 32,
    location: "France"
  }, (err, result) => {
    if (err) return console.log(err);
    console.log(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result.ops, null, 2));
  })


  client.close();
});
