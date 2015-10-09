myApp.factory('LoginFactory', function () {
	var factory = {};
	var user;
	factory.addUser = function(newUser, callback) {
		user = newUser;
		// console.log(user);
		callback();
	}

	factory.getUser = function() {
		return user;
	}

	return factory;
});