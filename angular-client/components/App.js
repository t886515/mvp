angular.module('random-select', [])

.controller('AppCtrl', function(StuModel) {
  this.selectedList = [];
  this.selected = {};
  this.dupAll = [];
  //this.allStudent = [];
  StuModel.fetch((err, studentData) => {
    this.allStudent = studentData;
    this.dupAll = studentData.slice();
    console.log(this.dupAll)
    //console.log(this.allStudent);
  })
  this.resetSelected = function() {
    this.selectedList = [];
  }

})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'
})