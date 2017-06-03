angular.module('app')
.controller('JobsCtrl',function(FirebaseService, $scope){
	FirebaseService.getKeywords().then(function(keywords){
		$scope.keywords = keywords;
	})
	$scope.addKeyword = function(word, type){
		FirebaseService.addKeyword(word, type);
	}
})