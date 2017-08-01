angular.module('random-select')

.controller('GroupedStudentCtrl', function() {
    
})

.component('groupedStudent', {
  controller: 'GroupedStudentCtrl',
  bindings: {
    grouparray: '<',
    index: '<'
  },
  templateUrl: 'templates/groupedStudent.html'
});