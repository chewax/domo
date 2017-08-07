(function () {
    angular.module('domo.authentication')
    .controller('AuthController', function ($scope, $state, authenticationServices, $ionicLoading, errorServices) {

        $scope.authenticate = function(user) {
            console.log(user);
        
            // $ionicLoading.show({ template: "Autenticando, por favor espere...<ion-spinner></ion-spinner>" });
            
            // $ionicLoading.hide();

            $state.go("app.rooms");

            // return authenticationServices.login(user)
            //     .then(function (response) {

            //         if (response.data.token) {

            //             // persist user
            //             authenticationServices.setToken(response.data.token);
            //             authenticationServices.setProfile(response.data.token);

            //             $ionicHistory.nextViewOptions({
            //                 disableBack: true
            //             });

            //             $ionicHistory.clearCache();
            //             $ionicHistory.clearHistory();


            //             $rootScope.$broadcast('cb.userloaded');
            //             $ionicLoading.hide();

            //             if (redirect)
            //                 $state.go("app.profile", { "userId": $scope.userProfile.id });
            //         }

            //     }).catch(function (err) {
            //         $ionicLoading.hide();
            //         $scope.flashMessage = err.data.reason;
            //         errorServices.logError(err, "trying to log in");
            //     });
        }
    });
})();
