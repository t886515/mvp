angular.module('random-select', [])

.controller('AppCtrl', function(StuModel) {
  this.selectedList = [];
  this.selected = {};
  this.dupAll = [];
  //this.allStudent = [];
  this.setAll = function(err, studentData) {
    this.allStudent = studentData;
    this.dupAll = studentData.slice();
  }.bind(this);

  this.resetSelected = function() {
    this.selectedList = [];
  }.bind(this);

  StuModel.fetch(this.setAll);
})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'
})