angular.module('app',[
	'firebase',
	'ui.router',
	'ngRoute'
])
.config(function($stateProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/',
  		templateUrl: 'home/home.html',
  		controller: 'HomeCtrl'
  	})
  	.state('profile', {
  		url: '/profile',
  		templateUrl: 'profile/profile.html',
  		controller: 'UserCtrl'
  	})
  	$locationProvider.html5Mode(true);
})
.controller('HomeCtrl', function($scope, User){
	console.log('Home')
	$scope.name = User.getName();
  $scope.getLinkedInData = function() {
  if(!$scope.hasOwnProperty("userprofile")){
  IN.API.Profile("me").fields(
  [ "id", "firstName", "lastName", "pictureUrl",
  "publicProfileUrl" ]).result(function(result) {
  // set the model
  $rootScope.$apply(function() {
  var userprofile = result.values[0];
  $rootScope.userprofile = userprofile;
  $rootScope.loggedUser = true;
  //go to main
  $location.path("/main");
  });
  }).error(function(err) {
  $scope.error = err;
  });
  }
  };
})
