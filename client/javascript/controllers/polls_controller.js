myApp.controller('PollsController', function ($scope, $location, $routeParams, PollFactory, LoginFactory) {
	PollFactory.getPolls(function (polls){
		// $scope.polls = polls
		// console.log('getting polls: ', polls);
		$scope.polls = polls;
	});

	$scope.addPoll = function() {
		// console.log($scope.newPoll);
		var user = LoginFactory.getUser();
		// console.log('the current user is: ', user);
		PollFactory.addPoll($scope.newPoll, user, function() {
			$location.path('/dashboard');
		});
	}

	//if user clicks poll
	if ($routeParams.id) {
		PollFactory.getPoll($routeParams.id, function(poll) {
			// console.log('user requesting one poll: ', poll);
			$scope.poll = poll;
		});
	}

	$scope.vote = function(pollId, option) {
		// console.log(pollId);
		// console.log(option);
		PollFactory.vote(pollId, option, function (updatedPoll) {
			console.log('at callback, poll: ', updatedPoll);
			$scope.poll = updatedPoll;
		});
	}

	$scope.remove = function(pollId) {
		PollFactory.remove(pollId, function(polls) {
			// console.log('polls: ', polls);
			$scope.polls = polls;
		});
	}
});