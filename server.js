var express = require('express');
// var browserify = require('browserify-middleware');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var Student = require('./app/models/student.js');
// var User = require('/app/models/user');

var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/randomSelect');
app.use(morgan('dev'));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, './angular-client')));
//this will render the major index file everytime when a user refresh

app.use(function(req, res, next) {
  console.log('Serving ' + req.method + ' for ' + req.url);
  next();
});


app.get('/fetch', function(req, res) {
  Student.find().exec((err, allStudents) => {
    res.status(200).send(allStudents);
  })
}); //get all data in array form from database
app.post('/add', function(req, res) {
  var name = req.body.name;
  var note = req.body.note;
  var newStudent = new Student({
    name: name,
    note: note
  });
  newStudent.save((err, student) => {
    if (err) {
      console.log('the error is: ', err);
      res.status(500).send(err);
    } else {
      console.log('Saved?');
      res.status(201).send(student);
    }
  })
}); // add items inside of a database

app.post('/removeall', function(req, res) {
  Student.remove({}).exec((err, success) => {
    res.status(201).send('successfully removed all');
  });
});


app.use('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'style.css'));
})



app.listen(5000, function() {
	console.log('Listening on port 5000');
})