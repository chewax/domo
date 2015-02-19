angular.module('common', ['settings'])


.service('Request', function(Config) {

  /*
   @name: getRequestURL
   @description: Builds request URL
  */
  var getURL = function(devId, functionName) {
    return Config.get('baseURL').value + "/" + devId + "/" + functionName;
  }

  /*
   @name: getValue()
   @description: Gets interface value. Takes into account if it is an analog
   or digital interface and performs the request accordingly.
   @params: Interface - Dictionary with interface data.
  */
  var getValue = function(interface) {
    //GET Request to retrieve variable data
    requestURL = getURL(interface.devId, 'daRead');
    command = interface.type + "," + interface.pin;
    accessToken = interface.accessToken;

    //Initial Value for the var
    value = "";

    // $http({
    //   url: requestURL,
    //   data: {
    //     params: command.toString(),
    //     access_token: accessToken
    //   }
    // }).then(function(response, status){
    //   callback(response.data.return_value);
    // });

    $.ajax({
      async: false,
      type: 'POST',
      data: {
        params: command.toString(),
        access_token: accessToken
      },
      url: requestURL,
      success: function(data) {
        value = data.return_value;
      }
    });

    return value;
  }


  return {
    getURL: getURL,
    getValue: getValue
  }
})

