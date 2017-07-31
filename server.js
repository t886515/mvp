var express = require('express');
var browserify = require('browserify-middleware');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('dev'));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, './angular-client')));
//this will render the major index file everytime when a user refresh

app.use(function(req, res, next) {
  console.log('Serving ' + req.method + ' for ' + req.url);
  next();
});


app.get('/fetch', function(req, res) {
  // Student.findAll().exec((err, allStudents) => {

  // })
}); //get all data in array form from database
app.post('/add', function(req, res) {
  // var newStudent = new Student({
  //   name: req.body.name
  // });
  // newStudent.save()
}); // add items inside of a database


app.use('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'style.css'));
})



app.listen(5000, function() {
	console.log('Listening on port 5000');
})