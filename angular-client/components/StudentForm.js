angular.module('random-select')
.controller('StudentFormCtrl', function(StuModel) {
  this.updateStudent = function() {
    StuModel.add(this.studentname, this.studentnote, (err, res) => {
      if (res) {
        StuModel.fetch((err, studentData) => {
          this.students = studentData;
          this.dup = studentData.slice();
        })
      }
    });
  }
})
.component('studentForm', {
  controller: 'StudentFormCtrl',
  bindings: {
    students: '=',
    selectedlist: '=',
    dup: '='
  },
  templateUrl: 'templates/studentForm.html'
});
