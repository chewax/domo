angular.module('domo')
.config(function($stateProvider, $urlRouterProvider, jwtInterceptorProvider) {
	
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('app', {
		url: "/menu",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})


	// // Each tab has its own nav history stack:
	// .state('tab.dash', {
	// 	url: '/dash',
	// 	views: {
	// 		'tab-dash': {
	// 			templateUrl: 'templates/tab-dash.html',
	// 			controller: 'DashCtrl'
	// 		}
	// 	}
	// })

	.state('app.rooms', {
		url: '/rooms',
		views: {
			'app-rooms': {
				templateUrl: 'templates/tab-rooms.html'
				// controller: 'RoomsCtrl'
			}
		}
	})

	// .state('tab.room-interfaces', {
	// 	url: '/rooms/:roomId',
	// 	views: {
	// 		'tab-rooms': {
	// 			templateUrl: 'templates/room-interfaces.html',
	// 			controller: 'RoomInterfacesCtrl'
	// 		}
	// 	}
	// })

	// .state('tab.settings', {
	// 	url: '/settings',
	// 	views: {
	// 		'tab-settings': {
	// 			templateUrl: 'templates/tab-settings.html',
	// 			controller: 'SettingsCtrl'
	// 		}
	// 	}
	// })

	.state('authenticate', {
		url: '/authenticate',
		templateUrl: 'modules/authentication/views/authenticate.html',
		controller: 'AuthController'
	});


	// if none of the above states are matched, use this as the fallback
	// $urlRouterProvider.otherwise('/tab/dash');
	$urlRouterProvider.otherwise('/authenticate');

	//JWT -- Interceptor to add token to requests
	jwtInterceptorProvider.tokenGetter = ['authenticationServices', 'config', function (authenticationServices, config) {

		// Skip authentication for any requests ending in .html
		if (config.url.substr(config.url.length - 5) == '.html') {
			return null;
		}

		// User is logged in
		if (!authenticationServices.userIsLoggedIn()) {
			return null;
		}

		// Inject token
		return authenticationServices.getUserJWT();
	}];

});