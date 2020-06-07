let mongoose = require("mongoose");

let dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/todoapp";
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {useNewUrlParser: true});

module.exports.mongoose = mongoose;
