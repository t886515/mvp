var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: {
    // Objectid: Schema.Types.ObjectId,
    type: String,
    require: true
  },
  note: String
});

var Student = mongoose.model('student', StudentSchema);

module.exports = Student;