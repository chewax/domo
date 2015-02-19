angular.module('starter.services', ['settings', 'common'])

// FOR BROADCASTING MESSAGES
.service('Messages', function($resource, Config) {

	var conf = Config.get("apiURL");
	return $resource(conf.value + '/msgs/:msg_id', {msg_id: '@id'});
	
})

.service('Rooms', function(Config, $http) {

	var rooms = [];
	var conf = Config.get("apiURL");
	console.log(conf.value);
	
	return {

		all: function(callback) {
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


