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
.factory('Rooms', function() {

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
				endPoint: "dgToggle",
				pin: "D7",
				type: "D", //Types are D|A = Digital Analog
				published: true,
				on: null,
				message_on: "Encendida",
				message_off: "Apagada",
				value: false,
			}, {

				id: 2,
				name: "Persianas",
				description: "Subir/Bajar",
				accessToken: "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37",
				devId: "54ff6e066672524839521167", //The device that publishes the action
				endPoint: "dgToggle",
				pin: "D6",
				type: "D", //Types are D|A = Digital Analog
				published: true,
				on: null,
				message_on: "Cerradas",
				message_off: "Abiertas",
				value: false,
			}]

		}, {
			id: 1,
			name: "Dormitorio",
			description: "Actuador",
			enabled: true,
			interfaces: [{

				id: 0,
				name: "Luz Principal",
				description: "Encender/Apagar",
				accessToken: "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37",
				devId: "54ff6e066672524839521167", //The device that publishes the action
				endPoint: "dgToggle",
				pin: "D5",
				type: "D", //Types are D|A = Digital Analog
				published: true,
				on: null,
				message_on: "Encendido",
				message_off: "Apagado",
				value: false,
			}, {

				id: 2,
				name: "Persianas",
				description: "Subir/Bajar",
				accessToken: "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37",
				devId: "54ff6e066672524839521167", //The device that publishes the action
				endPoint: "dgToggle",
				pin: "D4",
				type: "D", //Types are D|A = Digital Analog
				published: true,
				on: null,
				message_on: "Cerradas",
				message_off: "Abiertas",
				value: false,
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
