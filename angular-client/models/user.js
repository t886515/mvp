angular.module('random-select')

.factory('UserModel', function($http) {

  var HOST_URL = 'http://localhost:5000';

  
   var getUser = function(username, password, callback) {
    $http({
      url: `${HOST_URL}/logon`,
      method: 'POST',
      data: {
        username: username,
        password: password
      } 
    })

    .then(function(res) {
      callback(null, res.data);
    })
    .catch(function(err) {
      callback(err);
    });

  };

  var postUser = function(username, password, callback) {
    $http({
      url: `${HOST_URL}/signup`,
      method: 'POST',
      data: {
        username: username,
        password: password
      }
    })
    .then(function(res) {
      callback(null, res.data);
    })
    .catch(function(err) {
      callback(err);
    })
  }

  return {
    getUser: getUser,
    postUser: postUser
  };
});