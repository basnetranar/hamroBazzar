'use strict';

angular.module('myApp.aldi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aldi', {
    templateUrl: 'aldi/aldi.html',
    controller: 'aldiController'
  });
}])

.controller('aldiController', ['$scope',function($scope) {
	$scope.message = "welcome to aldi";
	$scope.passwordType = "password";
	console.log($scope.message);

	$scope.displayPassword = function(){

		if($scope.passwordType == "text"){
			$scope.passwordType = "password";
		}

		else{
			$scope.passwordType = "text";
		}
	}
}]);