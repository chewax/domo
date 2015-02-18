angular.module('starter.services', [])

// FOR BROADCASTING MESSAGES
.factory('Messages', function($resource, Config) {
	config = Config.get("apiURL");
	return $resource(config.value + '/msgs/:msg_id', {msg_id: '@id'});
})

/*SERVICE TO RETURN ROOM DATA
  to be changed upon client
*/
.factory('Rooms', function() {

	var roomService = this;
	var rooms = [];

	$.ajax({
	    async: false,
	    type: 'GET',
	    url: apiURL + '/rooms',
	    success: function(data) {
	      rooms = JSON.parse(data);
	    }

	  });

	return {

		all: function() {
			return rooms;
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

.factory('RoomsTest', function($resource) {
	return $resource('http://dwaxmbook.local:5000/user/dani');
})


