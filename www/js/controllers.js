angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('RoomsCtrl', function($scope, Rooms) {
  $scope.rooms = Rooms.all();
})

.controller('RoomInterfacesCtrl', function($scope, $stateParams, $filter, Rooms) {

  $scope.interfaces = Rooms.get_interfaces($stateParams.roomId);
  $scope.led = false;

  $scope.actuate = function($interface) {
    accessToken = $interface.accessToken;
    requestURL = getRequestURL($interface.devId, $interface.endPoint);

    $.post(requestURL, {
      access_token: accessToken
    }).done(function(data) {

      $interface.value = data.return_value;
      $interface.on = (data.return_value == 1);
      $scope.$apply();

    });

  };

})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
