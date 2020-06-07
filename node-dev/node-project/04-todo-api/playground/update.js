const {MongoClient, ObjectID} = require('mongodb');

const dbName = "todoapp";
const dbUrl = "mongodb://admin:admin@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin";


const client = new MongoClient(dbUrl, {useNewUrlParser: true});

client.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  collection.findOneAndUpdate(
    {_id: new ObjectID("5c6d604b46ac394d2cd32f3b")},
    {$inc: {age: 8}, $set: {name: "maldini", location: "Italy"}},
    {returnOriginal: false}
  ).then(
    (result) => console.log(JSON.stringify(result, null, 2))
  ).catch((err) => console.log(err))

  client.close();
});
