(function () {
    angular.module('domo.authentication')
        .factory('authenticationServices', function ($rootScope, $localStorage, $location, _, jwtHelper, apiServices, apiEndpoints) {

            var auth = {

                userJWT: '',
                userJWTLastUpdate: undefined,
                userProfile: {},

                getUserJWT: function () {
                    if (!auth.userJWT) {

                        //If userJWT is empty then either it hasnt yet been loaded from localstorage or user is logged out.
                        if ($localStorage.userJWT) {
                            auth.userJWT = $localStorage.userJWT;
                            auth.setProfile($localStorage.userJWT);
                        }
                    }

                    return auth.userJWT;
                },

                logout: function () {
                    //Reset auth vars.
                    $localStorage.userJWT = '';
                    auth.userJWT = '';
                    auth.userProfile = {};

                    //Redirect to root.
                    $location.path('/');
                },

                login: function (user) {

                    return new Promise(function(resolve, reject){
                        var endpoint = apiEndpoints.authenticate;
                        var data = {'username': user.username, 'password': user.password};
                        apiServices.POST(endpoint,data)
                        .then(function(result){
                            auth.userJWT = result.data.token;
                            setProfile(auth.userJWT);
                            resolve(result);
                        })
                        .catch(function(err){
                            console.log(err);
                            reject(err);
                        })
                    })
                    
                },

                setProfile: function (token) {
                    // Set Profile
                    var usrProf = jwtHelper.decodeToken(token);
                    auth.userProfile = usrProf;
                    $rootScope.user = auth.userProfile;
                },

                getProfile: function () {
                    // Decode jwt and if not in memory decode from localstorage call setProfile and return
                    if (_.isEmpty(auth.userProfile)) {
                        if (auth.userIsLoggedIn()) {
                            auth.setProfile(auth.getToken());
                        } else {
                            console.log("error getting profile");
                        }
                    }

                    return auth.userProfile;
                },


                setToken: function (newToken) {
                    auth.userJWT = newToken;
                    $localStorage.userJWT = newToken;
                    auth.userJWTLastUpdate = new Date();
                },

                userIsLoggedIn: function () {
                    return !_.isEmpty(auth.userJWT) || !_.isEmpty(localStorage.userJWT);
                },

                registerUser: function (registerData) {
                    var endpoint = apiEndpoints.register;

                    var data = {
                        firstName: registerData.firstName,
                        lastName: registerData.lastName,
                        email: registerData.email,        
                        credentials: {
                            username: registerData.username,
                            password: registerData.password
                        }
                    }

                    return apiServices.POST(endpoint,data);
                }
            }

            return auth;
        });

})();
