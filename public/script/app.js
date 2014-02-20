angular.module('app', ['ngRoute'])
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