let mongoose = require('mongoose');
let {Schema} = mongoose;

let schema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["Not Done", "Doing", "Done"],
    default: "Not Done"
  }
})

let Todo = mongoose.model("Todo", schema);

module.exports = {Todo}
