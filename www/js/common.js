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
   @params: Callback function that handles result
  */
  var getValue = function(interface, callback) {
    //GET Request to retrieve variable data
    requestURL = getURL(interface.devId, 'daRead');
    command = interface.type + "," + interface.pin;
    accessToken = interface.accessToken;


    $.post(requestURL, {
      params: command.toString(),
      access_token: accessToken
    }).done(function(data) {
      callback(data.return_value);
    });

  }


  return {
    getURL: getURL,
    getValue: getValue
  }
})

