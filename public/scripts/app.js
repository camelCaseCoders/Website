angular.module('app', ['ngRoute', 'menuItem'])
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'templates/start.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);