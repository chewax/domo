(function() {
    /**
     * @ngdoc function
     * @name domo.errors
     * @description
     * Services to post errors to Domo Backend
     */
    angular.module('domo.errors')
        .factory('errorServices', ['$rootScope',  'apiServices', 'apiEndpoints', 'authenticationServices',
            function ($rootScope, apiServices, apiEndpoints, authenticationServices) {

                function postError(e){
                    var data = {err:e};
                    var _endpoint = apiEndpoints.logError;
                    return apiServices.POST(_endpoint, data);
                }

            var services = {

                logError: function(err, action){

                    var loggedUser = authenticationServices.userProfile;
                    var reason = null;
                    if (typeof err.data != "undefined") reason = err.data;

                    var e = {
                        statusCode: 500,
                        userMessage: reason,
                        timestamp: Date.now(),
                        message: action,
                        user: loggedUser._id,
                        origin: "Mobile APP",
                        platform: ionic.Platform.platform(),
                        stack: err.stack,
                        err: err
                    };


                    if (ionic.Platform.platforms[0] == "browser") {
                        console.error(e);
                    }

                    return postError(e);
                }

            };

            return services;
        }]);

})();

