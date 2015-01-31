angular.module('starter.controllers', [])

/*************************************************************
 Dashboard Controller
 *************************************************************/
.controller('DashCtrl', function($scope, Messages) {

	$scope.messages = Messages.all();
})

/*************************************************************
 Rooms Controller
 *************************************************************/
.controller('RoomsCtrl', function($scope, $filter, Rooms) {

	//All Rooms
	$scope.rooms = Rooms.all();

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
})

/*************************************************************
 Room's Interfaces Controller
 *************************************************************/
.controller('RoomInterfacesCtrl', function($scope, $stateParams, $filter,
	Rooms) {

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
		requestURL = getRequestURL($interface.devId, $interface.endPoint);

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
	  Name: doRefresh
	  Desc: Recovers the actual values of the interfaces
	*/
	$scope.doRefresh = function() {

		for (i = 0; i < $scope.interfaces.length; i++) {
			iface = $scope.interfaces[i];
			if (iface.published === true) {
				iface.on = (getValue(iface) == 1);
			}
		}

		//Stop from spinning
		$scope.$broadcast('scroll.refreshComplete');
		$scope.$apply();

	};
})

/*************************************************************
 Settings Controller
 *************************************************************/
.controller('SettingsCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
