angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Messages) {
  $scope.messages = Messages.all();
})

.controller('RoomsCtrl', function($scope, $filter, Rooms) {
  $scope.rooms = Rooms.all();

  $scope.interfaceCount = function($room, $published) {

    ifs = $filter('filter')($room.interfaces, {
      published: $published
    });

    return ifs.length;
  };
})

.controller('RoomInterfacesCtrl', function($scope, $stateParams, $filter,
  Rooms) {

  $scope.room = Rooms.get($stateParams.roomId);
  $scope.interfaces = Rooms.get_interfaces($stateParams.roomId);

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

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
