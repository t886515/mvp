var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

var User = mongoose.model('user', UserSchema);

module.exports = User;