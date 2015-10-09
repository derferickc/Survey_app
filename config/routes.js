var polls = require('./../server/controllers/polls_controller.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getPolls', function(req, res) {
		polls.show(req, res);
	});

	app.post('/addPoll', function(req, res) {
		// console.log(req.body);
		polls.add(req, res);
	});

	app.get('/getPoll/:id', function(req, res) {
		// console.log('at route: pollId: ', req.params.id);
		polls.get(req, res);
	});

	app.post('/vote', function(req, res) {
		polls.vote(req, res);
	});

	app.post('/remove', function(req, res) {
		polls.remove(req, res);
	});
}