'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.woolworth',
  'myApp.coles',
  'myApp.home'
]).
config([ '$routeProvider', function( $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
