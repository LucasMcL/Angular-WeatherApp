angular
	.module('WeatherApp', ['ngRoute'])
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				controller: 'rootCtrl',
				templateUrl: '/partials/root.html'
			})
			.when('/weather/:zipcode', {
				controller: 'weatherCtrl',
				templateUrl: '/partials/weather.html'
			})
	})
	.controller('rootCtrl', function($scope, $location) {
		$scope.gotoWeather = () => { $location.url(`/weather/${$scope.zip}`) }
		console.log('I am a root controller.')
	})
	.controller('weatherCtrl', function() {
		console.log('I am a weather controller.')
	})
