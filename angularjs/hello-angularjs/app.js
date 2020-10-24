// Create a module
var helloApp = angular.module('helloApp', []);

// Create a controller
helloApp.controller('AnimalController', AnimalController);
function AnimalController($scope) {
  $scope.name = 'Tiger';
};
