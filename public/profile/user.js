angular.module('app')
.service('User', function(){
	this.name = 'Klara';
	this.age = 27;
	this.getName =function() {
		return this.name;
	}
})
.controller('UserCtrl', function(FirebaseService){
	console.log('UserCtrl')
})
