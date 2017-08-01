angular.module('random-select')
.controller('StudentFormCtrl', function(StuModel) {
  this.updateStudent = function() {
    StuModel.add(this.studentname, this.studentnote, (err, res) => {
      if (res) {
        StuModel.fetch(this.setall);
      }
    });
  }
})
.component('studentForm', {
  controller: 'StudentFormCtrl',
  bindings: {
    students: '=',
    selectedlist: '=',
    dup: '=',
    setall: '<'
  },
  templateUrl: 'templates/studentForm.html'
});
