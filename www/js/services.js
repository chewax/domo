angular.module('starter.services', [])

// FOR BROADCASTING MESSAGES
.factory('Messages', function() {

	var messages = [{
		id: 0,
		title: "Actualización disponible",
		body: "Hay una actualizacion disponible para su(s) dispositivo(s)",
		css_class: ""
	}, {
		id: 1,
		title: "Estado del sistema",
		body: "Todos los dispositivos funcionando normalmente",
		css_class: ""
	}];

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
.factory('Rooms', function( $http ) {

	var rooms = [];

	
	// $http.get('http://dwaxmbook.local:5000/user/dani').
	//   success(function(data, status, headers, config) {
	//     rooms = JSON.parse(data);
	//   }).
	//   error(function(data, status, headers, config) {
	//     // called asynchronously if an error occurs
	//     // or server returns response with an error status.
	//   });

	// $.getJSON('http://dwaxmbook.local:5000/user/dani', function (data) {
	// 	rooms = JSON.parse(data);
	// })

	// $.get('http://dwaxmbook.local:5000/user/dani').done(function(data) {
	// 	rooms = data;
	// });

	$.ajax({
	    async: false,
	    type: 'GET',
	    url: 'http://dwaxmbook.local:5000/user/dani',
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


