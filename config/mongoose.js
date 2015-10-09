var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/BlackBelt_Polls');

var models_path = __dirname + '/../server/models';

fs.readdirSync(models_path).forEach(function(file) {
  	if(file.indexOf('.js') > 0) {
    	require(models_path + '/' + file);
  	}
})