const {MongoClient, ObjectID} = require('mongodb');

const dbName = "todoapp";
const dbUrl = "mongodb://admin:admin@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin";


const client = new MongoClient(dbUrl, {useNewUrlParser: true});

client.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("todos");

  collection.find().toArray().then((docs) => {
    console.log("\nFetch all todos:");
    console.log(JSON.stringify(docs, null, 2));
  }).catch((err) => console.log(err));


  collection.find({status: "Completed"}).toArray().then((docs) => {
    console.log("\nFetch completed todos:");
    console.log(JSON.stringify(docs, null, 2));
  }).catch((err) => console.log(err));

  collection.find({
    _id: new ObjectID("5c6d03461be07a04cb924aac")
  }).toArray().then(
    (docs) => {
      console.log("\nFetch todo by ID:");
      console.log(JSON.stringify(docs, null, 2));
    }
  ).catch((err) => console.log(err));

  collection.countDocuments().then(
    (count) => console.log("\nNumber of todos: " + count)
  ).catch((err) => console.log(err));

  collection.countDocuments({status: "Not complete"}).then(
    (count) => console.log("\nNumber of not completed todos: " + count)
  )

  client.close();
});
