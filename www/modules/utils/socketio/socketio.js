(function() {
    /**
     * @ngdoc function
     * @name SocketIO
     * @description
     * SocketIO Library Factory for AngularJS module Injection
     */
    angular.module('domo.socketio', [])
        .factory(
            '$socketio', 
            function ($rootScope, socketFactory) {

            var myIoSocket = io.connect($rootScope.gfConfig.baseURL);

            var mySocket = socketFactory({
                ioSocket: myIoSocket
            });

            return mySocket;
        });
})();
