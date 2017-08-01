angular.module('random-select', [])

.controller('AppCtrl', function(StuModel) {
  this.selectedList = [];
  this.selected = {};
  this.dupAll = [];
  this.groupObject = {};
  this.groupNumArray = Object.keys(this.groupObject);

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