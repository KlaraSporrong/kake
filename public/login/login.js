angular.module('app')
.service('LoginService', function(FirebaseService){
	this.login = function() {
		FirebaseService.authObj.$signInWithEmailAndPassword("my@email.com", "password").then(function(firebaseUser) {
		  console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}
})
.controller('LoginCtrl', function($scope, LoginService){

	$scope.login = function() {
		LoginService.login();
	}
})