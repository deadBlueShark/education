let express = require("express");
let bodyParser = require("body-parser");

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} = require("./models/user");
const {ObjectID} = require("mongodb");
const _ = require("lodash");
let {authenticate} = require("./middleware/authenticate");

let app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());

//=======================================================================
// User router
app.get("/users", (req, res) => {
  User.find().then(
    (users) => res.send(users)
  ).catch(
    (err) => res.status(400).send(err)
  )
})

app.get("/user/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) return res.status(404).send({result: "Not found"});

  User.findById(id).then(
    (user) => {
      if (!user) {
        return res.status(404).send({result: "Not found"})
      }
      res.send(user);
    }
  ).catch((err) => res.status(404).send({result: "Not found"}))
})

app.post("/users", (req, res) => {
  let userParams = _.pick(req.body, ["name", "email", "password", "age", "location"]);
  let user = new User(userParams);

  user.save().then(
    (result) => { return user.generateAuthToken(); }
  ).then(
    (token) => res.header('x-auth', token).send(user)
  ).catch((err) => res.status(400).send(err));
})

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({result: "Not found"});
  }

  User.findByIdAndRemove(id).then(
    (result) => {
      if (!result) {
        return res.status(404).send({result: "Not found"});
      }
      res.send(result);
    }
  ).catch((err) => res.status(404).send({result: "Not found"}));
});

app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let userParams = _.pick(req.body, ["name", "age", "location"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({result: "Not found"});
  }

  User.findByIdAndUpdate(id, {$set: userParams}, {new: true}).then(
    (user) => res.send(user)
  ).catch((err) => res.status(400).send({result: "Update failed"}));
})

app.get("/users/me", authenticate, (req, res) => {
  res.header('x-auth', req.token).send(req.user);
});

//=======================================================================
// Todo router
app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save().then(
    (doc) => res.status(201).send(doc),
    (err) => res.status(400).send(err)
  )
})

//=======================================================================
app.listen(port, () => console.log("The app's running on port " + port));


/*
var user = new User({
  name: "   John Doe   ",
  age: 37,
  location: "USA"
})

user.save().then(
  (result) => console.log(JSON.stringify(result, null, 2))
).catch((err) => console.log(err))
*/

module.exports = {app};
