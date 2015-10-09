myApp.controller('LoginsController', function ($scope, LoginFactory, $location) {
	$scope.addUser = function() {
		LoginFactory.addUser($scope.newUser, function() {
			$location.path('/dashboard');
		});
	}
});