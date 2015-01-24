angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('RoomsCtrl', function($scope, Rooms) {
  $scope.rooms = Rooms.all();
})

.controller('RoomInterfacesCtrl', function($scope, $stateParams, Rooms) {
  $scope.interfaces = Rooms.get_interface($stateParams.roomId);
  $scope.led = false;

  $scope.toggle = function() {
    accessToken = getAccessToken();
    requestURL = getRequestURL(devId, "toggle");
    $.post(requestURL, {
      access_token: accessToken
    }).done(function(data) {
      updateLedState(data.return_value);
    });
  };

})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
