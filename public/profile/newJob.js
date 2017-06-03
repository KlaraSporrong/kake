angular.module('app')
.controller('NewJobCtrl', function($scope, FirebaseService){
	console.log('NewJobCtrl')
	$scope.keyword = '';
	$scope.newJob = {
		title: '',
		company: '',
		description: '',
		skills: []
	}
	$scope.searchKeyword = function(keyword) {
		$scope.searchResult = FirebaseService.searchKeyword(keyword);
	}
	$scope.addSkill = function(skill) {
		$scope.newJob.skills.push(skill);
	}
})