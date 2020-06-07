const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

let {Schema} = mongoose;

let UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
  age: {
    type: Number
  },
  location: {
    type: String
  }
})

UserSchema.pre('save', function(next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, ha))
    })
  } else {
    next()
  }
})

// Instance methods
UserSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
}

UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, 'secret-salt').toString();

  user.tokens.push({access, token});
  //this.tokens = this.tokens.concat([{access, token}]);
  return user.save().then(
    () => { return token; }
  )
}

// Class method
UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'secret-salt');
    console.log(JSON.stringify(decoded, null, 2));
  } catch(e) {
    console.log(e);
    return new Promise((resolve, reject) => reject("Not found"));
    // OR
    // return Promise.reject("Not found");
  }

  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
}

let User = mongoose.model("User", UserSchema);

module.exports = {User: User}
