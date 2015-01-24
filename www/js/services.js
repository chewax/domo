angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/* DUMMY SERVICE TO RETURN ROOM DATA*/
.factory('Rooms', function() {

  var rooms = [{
    id: 0,
    name: "Comedor",
    description: "3 Luces Asociadas",
    enabled: true,
    interfaces: [{

      id: 0,
      name: "Luz Principal",
      description: "Encender/Apagar",
      devId: "54ff6e066672524839521167", //The device that publishes the action
      endPoint: "toggle",
      type: "FUNC", //Posible types [FUNC | VAR]
      published: true

    }, {

      id: 1,
      name: "Estado Luz Principal",
      description: "Estado",
      devId: "54ff6e066672524839521167", //The device that publishes the action
      endPoint: "led-state",
      type: "VAR", //Posible types [FUNCTION | VARIABLE]
      published: false // El usuario no la ve directamente. SE consume a traves de la aplicacion.

    }]

  }];

  return {

    all: function() {
      return rooms;
    },

    get: function(roomId) {
      // Simple index lookup
      return rooms[roomId];
    },

    get_interface: function(roomId) {
      // Simple index lookup
      return rooms[roomId].interfaces;
    }

  }
})
