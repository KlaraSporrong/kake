angular.module('app')
.service('FirebaseService', ['$firebaseAuth', function($firebaseAuth){
	this.authObj = $firebaseAuth();
	this.signIn = function() {
		return this.authObj.$signInWithEmailAndPassword;
	}
	this.init = function() {
		return $firebaseAuth();
	}
}])