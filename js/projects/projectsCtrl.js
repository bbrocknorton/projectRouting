var app = angular.module('projects');

app.controller('projectsCtrl', function($scope, $routeParams, projectsService) {
	if ($routeParams.id === 'commute') {
		$scope.projectsData = projectsService.projectData
	} else if ($routeParams.id === 'nba') {
		$scope.projectsData = projectsService.????
	} else if ($routeParams.id === 'chatroom') {
		$scope.projectsData = projectsService.????
	}	else if ($routeParams.id === 'picsite') {
		$scope.projectsData = projectsService.????
	}	else if ($routeParams.id === 'todolist') {
		$scope.projectsData = projectsService.????
	}	else if ($routeParams.id === 'reddit') {
		$scope.projectsData = projectsService.????		
	}	else if ($routeParams.id === 'gallery') {
		$scope.projectsData = projectsService.????
	}	else if ($routeParams.id === 'trap') {
		$scope.projectsData = projectsService.????	
	}	else if ($routeParams.id === 'paint') {
		$scope.projectsData = projectsService.????	
	}
})