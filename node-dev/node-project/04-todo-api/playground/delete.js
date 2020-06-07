const {MongoClient, ObjectID} = require('mongodb');

const dbName = "todoapp";
const dbUrl = "mongodb://admin:admin@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin";


const client = new MongoClient(dbUrl, {useNewUrlParser: true});

client.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

/*
  collection.deleteOne({name: "cris"}).then(
    (result) => console.log(result)
  ).catch((err) => console.log(err));

  collection.deleteMany({name: "cris ronaldo"}).then(
    (result) => console.log(result)
  ).catch((err) => console.log(err));
*/
  collection.findOneAndDelete({name: "le chi nguyen"}).then(
    (result) => console.log(JSON.stringify(result, null, 2))
  )

  client.close();
});
