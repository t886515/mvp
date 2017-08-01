angular.module('random-select', [])

.controller('AppCtrl', function(StuModel, UserModel) {
  this.selectedList = [];
  this.selected = {};
  this.dupAll = [];
  this.groupObject = {};
  this.groupNumArray = Object.keys(this.groupObject);

  this.signUp = function() {
    UserModel.postUser(this.username, this.password, (err, user) => {
      if (user) {
        this.user = user;
      } else {
        alert('Username was already in use. Please re-enter.');
        return;
      }
    })
  }

  this.logOn = function() {
    UserModel.getUser(this.username, this.password, (err, user) => {
      if (user) {
        this.user = user;
      } else {
        console.log(err);
        alert('Please enter a valid username/password or sign up!')
        return;
      }
    })
  }

  this.setAll = function(err, studentData) {
    this.allStudent = studentData;
    this.dupAll = studentData.slice();
    console.log(this.allStudent);
  }.bind(this);

  this.resetSelected = function() {
    this.selectedList = [];
    this.dupAll = this.allStudent.slice();
    this.selected = {};
  }.bind(this);

  this.setGroup = function(groupObj) {
    this.groupObject = groupObj;
    this.groupNumArray = Object.keys(this.groupObject); 
  }.bind(this);

  this.resetGroup = function() {
    this.groupObject = {};
    this.groupNumArray = Object.keys(this.groupObject);
  }.bind(this);

  StuModel.fetch(this.setAll);
})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'
})