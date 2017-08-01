angular.module('random-select')
.controller('SelectedStudentCtrl', function() {
  
  
      
})
.component('selectedStudent', {
  controller: 'SelectedStudentCtrl',
  bindings: {
    selectedstudent: '<'
  },
  templateUrl: 'templates/selectedStudent.html'
});
