angular.module('random-select')

.controller('GroupedStudentEntryCtrl', function() {
    
})

.component('groupedStudentEntry', {
  controller: 'GroupedStudentEntryCtrl',
  bindings: {
    student: '<'
  },
  templateUrl: 'templates/groupedStudentEntry.html'
});