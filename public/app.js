angular.module('app',[
	'firebase',
	'ui.router',
	'ngRoute'
])
.config(function($stateProvider, $locationProvider) {
	$stateProvider
  	.state('profile', {
  		url: '/profile',
  		templateUrl: 'profile/profile.html',
  		controller: 'UserCtrl'
  	})
		.state('jobs', {
  		url: '/jobs',
  		templateUrl: 'jobs/jobs.html'
  	})
		.state('login', {
  		url: '/login',
  		templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
  	})
  	$locationProvider.html5Mode(true);

    var config = {
      apiKey: "AIzaSyDrC4ea4aHW1_qMq0nahJVGcvh9Xh4iBrk",
      authDomain: "openhack-fa8b6.firebaseapp.com",
      databaseURL: "https://openhack-fa8b6.firebaseio.com",
      projectId: "openhack-fa8b6",
      storageBucket: "openhack-fa8b6.appspot.com",
      messagingSenderId: "810862575296"
    };
    firebase.initializeApp(config);
})
.run(function($state){
  $state.go('login')
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
