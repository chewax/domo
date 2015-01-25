angular.module('starter.services', [])

/* DUMMY SERVICE TO RETURN ROOM DATA*/
.factory('Rooms', function($http) {

	var rooms = [

		{
			id: 0,
			name: "Comedor",
			description: "Actuador",
			enabled: true,
			interfaces: [{

				id: 0,
				name: "Luz Principal",
				description: "Encender/Apagar",
				accessToken: "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37",
				devId: "54ff6e066672524839521167", //The device that publishes the action
				endPoint: "toggle",
				type: "FUNC", //Posible types [FUNC | VAR]
				published: true,
				on: null,
				value: false,
				_var: 'led-state'
			}, {

				id: 1,
				name: "Estado Luz Principal",
				description: "Estado",
				accessToken: "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37",
				devId: "54ff6e066672524839521167", //The device that publishes the action
				endPoint: "led-state",
				type: "VAR", //Posible types [FUNCTION | VARIABLE]
				published: false, // El usuario no la ve directamente. SE consume a traves de la aplicacion.
				on: null,
				value: false,
				_var: null

			}]

		}

	];

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
