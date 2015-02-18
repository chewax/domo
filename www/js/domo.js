//Base Spark-API URL
var baseURL = "https://api.spark.io/v1/devices";

//Domo API Base URL
var apiURL = "http://dwaxmbook.local:5000";
// var apiURL = "http://192.168.0.103:5000";

/*
 @name: getRequestURL
 @description: Builds request URL
*/
function getRequestURL(devId, functionName) {
  return baseURL + "/" + devId + "/" + functionName;
}

/*
 @name: getValue()
 @description: Gets interface value. Takes into account if it is an analog
 or digital interface and performs the request accordingly.
 @params: Interface - Dictionary with interface data.
*/

function getValue(interface) {
  //GET Request to retrieve variable data
  requestURL = getRequestURL(interface.devId, 'daRead');
  command = interface.type + "," + interface.pin;
  accessToken = interface.accessToken;

  //Initial Value for the var
  value = "";

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
