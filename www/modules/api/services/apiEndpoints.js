(function () {
    /**
     * @ngdoc function
     * @name domo.api
     * @description
     * Services to hit the domo API
     */
    angular.module('domo.api')

        .factory('apiEndpoints', function ($http, $rootScope) {

            var api = {
                authenticate: '/public/authenticate',
                register: '/public/students/create',
                logError: '/public/logger'
            };

            return api;
        });

})();
