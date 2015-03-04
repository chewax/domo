angular.module('domo', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

/*
  State provider. Define the routing for the application.
*/
.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})


	// Each tab has its own nav history stack:
	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-dash.html',
				controller: 'DashCtrl'
			}
		}
	})

	.state('tab.rooms', {
		url: '/rooms',
		views: {
			'tab-rooms': {
				templateUrl: 'templates/tab-rooms.html',
				controller: 'RoomsCtrl'
			}
		}
	})

	.state('tab.room-interfaces', {
		url: '/rooms/:roomId',
		views: {
			'tab-rooms': {
				templateUrl: 'templates/room-interfaces.html',
				controller: 'RoomInterfacesCtrl'
			}
		}
	})

	.state('tab.settings', {
		url: '/settings',
		views: {
			'tab-settings': {
				templateUrl: 'templates/tab-settings.html',
				controller: 'SettingsCtrl'
			}
		}
	})

	.state('tab.login', {
		url: '/login',
		views: {
			'tab-login': {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			}
		}
	});


	// if none of the above states are matched, use this as the fallback
	// $urlRouterProvider.otherwise('/tab/dash');
	$urlRouterProvider.otherwise('/tab/login');

});
