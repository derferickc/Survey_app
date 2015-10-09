var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
	name: String,
	question: String,
	created_at: Date,
	options: {option1: String, option2: String, option3: String, option4: String},
	vote1: Number,
	vote2: Number,
	vote3: Number,
	vote4: Number
});

mongoose.model('Poll', PollSchema);