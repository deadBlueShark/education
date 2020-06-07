const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {User} = require("./../server/models/user");

let id = "5c6d20d9843ff4382ab1d87b";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
  process.exit();
}

User.find({
  _id: id
}).then(
  (users) => console.log(JSON.stringify(users, null, 2))
).catch((err) => console.log(err))

User.findOne({_id: id}).then(
  (user) => console.log(JSON.stringify(user, null, 2))
).catch((err) => console.log(err));

User.findById(id).then(
  (user) => console.log(JSON.stringify(user, null, 2))
).catch((err) => console.log(err));
