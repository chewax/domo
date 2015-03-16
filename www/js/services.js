angular.module('starter.services', ['settings', 'common'])

// FOR BROADCASTING MESSAGES
.service('Messages', function($resource, $rootScope, Config) {

	var url = Config.get("apiURL");
	var apiToken = Config.get("apiToken");
	var serializedToken = 'Bearer ' + apiToken.value;

	resParams = { msg_id: '@id' };
	actions = {
		'query': {
			headers: { 'Authorization': serializedToken },
			isArray: true,
			method: 'GET'
		}
	};

	return $resource(url.value + '/msgs/:msg_id', resParams, actions);
})

.service('Rooms', function(Config, $http) {

	var rooms = [];
	
	return {

		all: function(callback) {
			// Get config here to reflect changes
			var conf = Config.get("apiURL");
			return $http.get(conf.value + '/rooms').then(function(response) {
				rooms = response.data;
				callback(rooms);
			});
		},

		get: function(roomId) {
			// Simple index lookup
			return rooms[roomId];
		},

		get_interfaces: function(roomId) {
			// Simple index lookup
			return rooms[roomId].interfaces;
		}
	}
})

.service('RoomsTest', function($resource, Config) {
	var conf = Config.get("apiURL");
	return $resource(conf.value + '/user/dani');
})


