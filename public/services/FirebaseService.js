angular.module('app')
.service('FirebaseService', ['$q','$firebaseAuth','$firebaseObject','$firebaseArray', function($q, $firebaseAuth, $firebaseObject, $firebaseArray){
	this.authObj = $firebaseAuth();
	this.ref = firebase.database().ref(); // assume value here is { foo: "bar" }
	this.firebaseObj = $firebaseObject(this.ref);
	console.log(this.firebaseObj)
	this.signIn = function() {
		return this.authObj.$signInWithEmailAndPassword;
	}
	
	this.authObj.$onAuthStateChanged(function(firebaseUser) {
	  if (firebaseUser) {
	    console.log("Signed in as:", firebaseUser.uid);
	  } else {
	    console.log("Signed out");
	  }
	});

	this.addKeyword = function(keyword, type) {
		console.log(this.firebaseObj)
		var keywords = this.ref.child('keywords');
		var list = $firebaseArray(keywords);
		console.log(keyword)
		console.log(type)
		list.$add({ word: keyword, type: type }).then(function(success){
			console.log(success)
		});
	}
	this.getKeywords = function() {
		var defer = $q.defer();
		this.ref.child('keywords').once('value').then(function(snapshot){
	    	var keywords = snapshot.val();
	    	if(keywords === null) {
	    		defer.reject('no keywords');
	    	} else {
	    		defer.resolve(keywords);
	    	}
		})
		return defer.promise;
	}
	this.getKeywords().then(function(keywords){
		console.log(keywords)
	});
}])