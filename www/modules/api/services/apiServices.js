(function () {
    /**
     * @ngdoc function
     * @name domo.api
     * @description
     * Services to hit the domo API
     */
    angular.module('domo.api')

        .factory('apiServices', function ($http, _conf) {

            var baseURL = _conf.get("apiURL");
            var apiVersion = _conf.get("apiVersion");

            var api = {

                /**
                 * Deprecated
                 * @param req
                 * @returns {*}
                 */
                apiRequest: function (req) {
                    req = addHeaders(req);
                    return $http(req);
                },

                _request: function (method, endpoint, data, params) {

                    var req = {
                        method: method,
                        url: baseURL + apiVersion + endpoint
                    };

                    if (typeof params != "undefined") req.params = params;
                    if (typeof data != "undefined") req.data = data;


                    req = addHeaders(req);

                    return $http(req);
                },

                GET: function (endpoint, params) {
                    return api._request("GET", endpoint, undefined, params);
                },

                POST: function (endpoint, data, params) {
                    return api._request("POST", endpoint, data, params);
                },

                PUT: function (endpoint, data, params) {
                    return api._request("PUT", endpoint, data, params);
                },

                PATCH: function (endpoint, data, params) {
                    return api._request("PATCH", endpoint, data, params);
                },

                DELETE: function (endpoint, data, params) {
                    return api._request("DELETE", endpoint, data, params);
                }

            };

            function addHeaders (req) {

                req.headers = {};
                req.headers["AppKey"] = _conf.appKey;
                req.headers["Content-Type"] = 'application/json';

                return req;
            }

            return api;
        });

})();
