angular.module('starter.controllers', ['common'])

// app.value('apiURL', "http://dwaxmbook.local:5000");
/*************************************************************
 Dashboard Controller
 *************************************************************/
.controller('DashCtrl', function($scope, Messages, $http) {

	$scope.messages = Messages.query();

	$scope.remove = function ($message){
		Messages.delete({msg_id:$message._id}, function(){
			$scope.messages = Messages.query();
		});
	}

	/*
	  Name: refreshMessages
	  Desc: Recovers the actual values of the messages
	*/
	$scope.refreshMessages = function() {

		//Reset messages
		$scope.messages = [];
		//Get new Messages
		$scope.messages = Messages.query();
		
		//Stop from spinning
		$scope.$broadcast('scroll.refreshComplete');
		$scope.$apply();

	};
})

/*************************************************************
 Rooms Controller
 *************************************************************/
.controller('RoomsCtrl', function($scope, $filter, Rooms, RoomsTest) {

	//All Rooms
	Rooms.all(function(rooms) {
		$scope.rooms = rooms;
	});
	// $scope.rooms = RoomsTest.query();
	/*
	  Name:  interfaceCount
	  Desc:  Returns the amount of interfaces in a room that are published or not
	         according to the $published param.
	  Param: $room, dictionary of a room
	  Param: $published, boolean.
	*/
	$scope.interfaceCount = function($room, $published) {

		ifs = $filter('filter')($room.interfaces, {
			published: $published
		});

		return ifs.length;
	};

	/*
	  Name: refreshRooms
	  Desc: Recovers the actual values of the rooms
	*/
	$scope.refreshRooms = function() {

		//Reset Rooms
		$scope.rooms = [];

		//Get new Rooms
		Rooms.all(function(rooms) {
			$scope.rooms = rooms;
		});
		
		//Stop from spinning
		$scope.$broadcast('scroll.refreshComplete');
		$scope.$apply();

	};
})

/*************************************************************
 Room's Interfaces Controller
 *************************************************************/
.controller('RoomInterfacesCtrl', function($scope, $stateParams, $filter,
	Rooms, Request) {

	$scope.room = Rooms.get($stateParams.roomId);
	$scope.interfaces = Rooms.get_interfaces($stateParams.roomId);

	/*
	  Name:   actuate
	  Desc:   Actuates the interface. By that it means that it posts a request to
	          the API to peform a certain action in an interface. That action is
	          determined by the actual properties of the interface.
	  Param:  $interface to be actuated
	*/
	$scope.actuate = function($interface) {

		accessToken = $interface.accessToken;
		requestURL = Request.getURL($interface.devId, $interface.endPoint);

		$.post(requestURL, {
			params: $interface.pin,
			access_token: accessToken
		}).done(function(data) {

			$interface.value = data.return_value;
			$interface.on = (data.return_value == 1);
			$scope.$apply();

		});

	};

	/*
	  Name: refreshInterfaces
	  Desc: Recovers the actual values of the interfaces
	*/
	$scope.refreshInterfaces = function() {

		for (i = 0; i < $scope.interfaces.length; i++) {
			iface = $scope.interfaces[i];

			if (iface.published) {
				Request.getValue(iface, function(state) {
					// !!state = cast to boolean (eg: !!1 == true)
					iface.on = !!state;

					//When a state changes, refresh interface:
					$scope.$apply();
				});
			}
		}

		//Stop from spinning
		$scope.$broadcast('scroll.refreshComplete');

	};
})

/*************************************************************
 Settings Controller
 *************************************************************/
.controller('SettingsCtrl', function($scope, Config) {

	$scope.settings = Config.all();

	$scope.updateUrl = function(key, val) {
		Config.set(key, val);
	}

});
