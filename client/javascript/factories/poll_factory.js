myApp.factory('PollFactory', function ($http) {
	var factory = {};
	var polls = [];

	factory.getPolls = function(callback) {
		$http.get('/getPolls').success(function (allPolls) {
			// console.log('made it back from database, all polls: ', allPolls);
			polls = allPolls;
			callback(polls);
		});
	}

	factory.addPoll = function(newPoll, user, callback) {
		// console.log('at factory, new poll: ', newPoll);
		// console.log('at factory, new user: ', user);
		var newPoll = {name: user.name, question: newPoll.question, created_at: Date.now(),
					   options: {option1: newPoll.option1, option2: newPoll.option2, option3: newPoll.option3,
					   	option4: newPoll.option4}, vote1: 0, vote2: 0, vote3: 0, vote4: 0};
		$http.post('/addPoll', newPoll).success(function (addedPoll) {
			// console.log('made it back, addedpoll: ', addedPoll);
			callback();
		});
	}

	factory.getPoll = function(pollId, callback) {
		$http.get('/getPoll/' + pollId).success(function (poll) {
			callback(poll);
		});
	}

	factory.vote = function(pollId, option, callback) {
		var request = {pollId: pollId, option: option};
		$http.post('/vote', request).success(function () {
			var updatedPoll;
			$http.get('/getPolls').success(function (allPolls) {
				for (var i = 0; i < allPolls.length; i++) {
					if (allPolls[i]._id == pollId) {
						console.log('here');
						updatedPoll = allPolls[i];
						callback(updatedPoll);
						break;
					}
				}
			});
		})
	}

	factory.remove = function(pollId, callback) {
		// console.log('pollId:', pollId);
		$http.post('/remove', {pollId: pollId}).success(function() {
			// console.log('back from database:', polls);
			$http.get('/getPolls').success(function (allPolls) {
				callback(allPolls);
			});
		});
	}

	return factory;
});