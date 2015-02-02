angular.module('starter.services', [])

// FOR BROADCASTING MESSAGES
.factory('Messages', function() {
	
	

	var messages = [];

	console.log(messages);

	$.ajax({
	    async: false,
	    type: 'GET',
	    url: 'http://dwaxmbook.local:5000/msgs',
	    success: function(data) {
	      messages = JSON.parse(data);
	  	}
	})

	return {

		all: function() {
			return messages;
		},

		get: function(messageId) {
			// Simple index lookup
			return messages[messageId];
		}
	}

})

/*SERVICE TO RETURN ROOM DATA
  to be changed upon client
*/
.factory('Rooms', function() {

	var rooms = [];

	$.ajax({
	    async: false,
	    type: 'GET',
	    url: 'http://dwaxmbook.local:5000/rooms',
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


