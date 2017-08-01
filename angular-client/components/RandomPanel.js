angular.module('random-select')

.controller('RandomPanelCtrl', function() {
  
})

.component('randomPanel', {
  controller: 'RandomPanelCtrl',
  bindings: {
    selected: '<',
    selectedlist: '<',
    reset: '<'
  },
  templateUrl: 'templates/randomPanel.html'
});