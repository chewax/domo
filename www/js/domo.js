baseURL = "https://api.spark.io/v1/devices/";



function getRequestURL(devId, functionName) {
  return baseURL + devId + "/" + functionName;
}


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
