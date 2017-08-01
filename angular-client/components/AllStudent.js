angular.module('random-select')
.controller('AllStudentCtrl', function(StuModel) {
  this.clearDB = function() {
    if (confirm('Are you sure you really want to remove all your student data from the database?')) {
      var ans = prompt('No seriously. You will lose all your data 4EVER. Continue? (Enter Y to proceed)');
      if (ans === 'Y' || ans === 'y')
        StuModel.remove((err, res) => {
          if (res) {
            console.log(res, 'did it go through?');
            StuModel.fetch(this.setall);
          }
        })
    }
  };

  this.groupThem = function() {
    if (!/^\d+$/.test(this.groupsize)) {
      alert('Please enter a valid group size');
      return;
    }
    if (this.groupsize - this.students.length % this.groupsize > 1 && this.students.length % this.groupsize !== 0) {
      var ans = confirm('This will result in an inbalance groups. Enter Y to continue');
      if (!ans) {
        alert('Please re-enter a group size.');
        return;
      }
    }
    var copyStudents = this.students.slice();
    var groupObject = {};

    this.selectGroup = function(groupNum = 1) {
      if (copyStudents.length === 0) {
        return;
      }
      var newArray = [];
      for (var i = 0; i < Math.round(this.groupsize); i++) {
        var randomIndex = Math.floor(Math.random() * copyStudents.length);
        if (copyStudents[randomIndex] !== undefined) {
          newArray.push(copyStudents[randomIndex]);
          copyStudents.splice(randomIndex, 1);
        }
      }
      groupObject[groupNum] = newArray;
      this.selectGroup(groupNum+=1);
    }

    this.selectGroup(); 
    this.setgroup(groupObject);
    
  }

  this.randomPick = function() {
    var randomIndex = Math.floor(Math.random() * this.dup.length);
    var exist = false;
    if (this.dup.length === 0) {
      alert('You have selected every student!');
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
    dup: '=',
    setgroup: '<',
    setall: '<'
  },
  templateUrl: 'templates/allStudent.html'
});