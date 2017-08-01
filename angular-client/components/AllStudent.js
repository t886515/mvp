angular.module('random-select')
.controller('AllStudentCtrl', function() {
  this.groupThem = function() {
    if (!/^\d+$/.test(this.groupsize)) {
      alert('Please enter a valid group size');
      return;
    }
    var groupNum = Math.round(this.students.length/this.groupsize);
    console.log(groupNum)
    
  }

  this.randomPick = function() {
    // var dup = this.students.slice()
    var randomIndex = Math.floor(Math.random() * this.dup.length);
    var exist = false;
    if (this.dup.length === 0) {
      console.log('everything was selected');
      return;
    }
    for (var i = 0; i < this.selectedList.length; i++) {
      if (this.selectedList[i]._id === this.dup[randomIndex]._id) {
        exist = true;
      }
    }
    if (!exist) {

      this.selected = this.dup[randomIndex];
      this.selectedList.push(this.dup[randomIndex]);
      this.dup.splice(randomIndex, 1);

    } else if (exist) {
      this.dup.splice(randomIndex, 1);
      this.randomPick();
    }
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