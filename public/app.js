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
  IN.Event.on(IN, "auth", function(e){
        IN.API.Profile("me").fields(
          [ "id", "firstName", "lastName", "pictureUrl",
          "publicProfileUrl","positions" ]).result(function(result) {
              console.log(result)
          });
    }, function(error){
      console.log(error)
    });
  });
