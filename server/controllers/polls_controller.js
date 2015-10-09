var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function() {
	return {
		show: function(req, res) {
			Poll.find({}, function(err, allPolls) {
				if (err) {
					console.log('error getting polls');
				} else {
					// console.log('got all polls: ', allPolls);
					res.json(allPolls);
				}
			});
		},

		add: function(req, res) {
			var newPoll = new Poll(req.body);
			newPoll.save(function(err, addedPoll) {
				if (err) {
					console.log('error adding poll');
				} else {
					console.log('added poll: ', addedPoll);
					res.json(addedPoll);
				}
			});
		},

		get: function(req, res) {
			Poll.findOne({_id: req.params.id}, function(err, poll) {
				if (err) {
					console.log('error adding poll');
				} else {
					// console.log('got poll:', poll);
					res.json(poll);
				}
			});
		},

		vote: function(req, res) {
			// console.log(req.body.pollId);
			// console.log(req.body.option);
			if (req.body.option == 1) {
				Poll.update({_id: req.body.pollId}, {$inc: {vote1: 1}}, function(err, poll) {
					if (err) {
						console.log(err);
					} else {
						console.log(req.body.pollId);
						console.log('success updating poll: ', poll);
						res.json({});
					}
				});
			} else if (req.body.option == 2) {
				Poll.update({_id: req.body.pollId}, {$inc: {vote2: 1}}, function(err, poll) {
					if (err) {
						console.log(err);
					} else {
						console.log(req.body.pollId);
						console.log('success updating poll: ', poll);
						res.json({});
					}
				});
			} else if (req.body.option == 3) {
				Poll.update({_id: req.body.pollId}, {$inc: {vote3: 1}}, function(err, poll) {
					if (err) {
						console.log(err);
					} else {
						console.log(req.body.pollId);
						console.log('success updating poll: ', poll);
						res.json({});
					}
				});
			} else if (req.body.option == 4) {
				Poll.update({_id: req.body.pollId}, {$inc: {vote4: 1}}, function(err, poll) {
					if (err) {
						console.log(err);
					} else {
						console.log(req.body.pollId);
						console.log('success updating poll: ', poll);
						res.json({});
					}
				});
			}
		},

		remove: function(req, res) {
			Poll.remove({_id: req.body.pollId}, function(err, result) {
				if (err) {
					console.log(err);
				} else {
					console.log('success');
					res.json({});
				}
			});
		}
	}
})();