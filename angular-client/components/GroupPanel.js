angular.module('random-select')

.controller('GroupPanelCtrl', function() {

})

.component('groupPanel', {
  controller: 'GroupPanelCtrl',
  bindings: {
    groupobj: '<',
    groupnumarray: '<',
    resetgroup: '<'
  },
  templateUrl: 'templates/groupPanel.html'
});