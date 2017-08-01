angular.module('random-select')
.controller('AllStudentCtrl', function() {
  this.randomPick = function() {
    // var dup = this.students.slice()
    var randomIndex = Math.floor(Math.random() * this.dup.length);
    var exist = false;
    if (this.dup.length === 0) {
      console.log('everything was selected');
      return;
    }
    for (var i = 0; i < this.selectedList.length; i++) {
      if (this.selectedList[i]._id === this.students[randomIndex]._id) {
        exist = true;
      }
    }
    if (!exist) {

      this.selected = this.dup[randomIndex];
      this.selectedList.push(this.dup[randomIndex]);
      this.dup.splice(randomIndex, 1);
      console.log(this.dup, 'dup');

    } else if (exist) {
      this.dup.splice(randomIndex, 1);
      this.randomPick();
      console.log(this.dup, 'dup');
    }
      console.log(this.selectedList, 'this is the selected list')
  }
})
.component('allStudent', {
  controller: 'AllStudentCtrl',
  bindings: {
    students: '<',
    selected: '=',
    selectedList: '=',
    dup: '='
  },
  templateUrl: 'templates/allStudent.html'
});