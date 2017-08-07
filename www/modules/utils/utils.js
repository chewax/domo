(function() {
    /**
     * @ngdoc function
     * @name domo.utils
     * @description
     * domo Utils Functions
     */
    angular.module('domo.utils',[])
        .factory('$utils', function ($rootScope, $moment) {

            var services = {

                /**
                 * Makes Random ID.
                 * @param _size = id length defaults to 5.
                 * @returns {string}
                 */
                makeId: function(_size) {
                    if (typeof _size == "undefined" || _size == null) _size = 5;
                    var text = "";
                    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                    for (var i = 0; i < _size; i++) {
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                    }
                    return text;
                },

                fromNow: function (date) {
                    return ($moment(date).fromNow());
                }
            }

            return services;
        });

})();


