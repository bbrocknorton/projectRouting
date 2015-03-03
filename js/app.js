var app = angular.module('projects', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/products/:id', {
			templateUrl: 'js/products/projectTmpl.html',
			controller: 'projectsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});