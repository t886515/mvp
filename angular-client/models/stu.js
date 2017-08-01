angular.module('random-select')

.factory('StuModel', function($http) {

  var HOST_URL = 'http://localhost:5000';

  var add = function(name, note, callback) {
    $http({
      url: `${HOST_URL}/add`,
      method: 'POST',
      data: {
        name: name,
        note: note
      }
    })

    .then(function(res) {
      callback(null, res.data);
    })
    .catch(function(err) {
      callback(err);
    });

  };

   var fetch = function(callback) {
    $http({
      url: `${HOST_URL}/fetch`,
      method: 'GET'
    })

    .then(function(res) {
      callback(null, res.data);
    })
    .catch(function(err) {
      callback(err);
    });

  };

  return {
    add: add,
    fetch: fetch
  };
});