angular.module('app', ['ngRoute', 'menuItem'])
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
					
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);