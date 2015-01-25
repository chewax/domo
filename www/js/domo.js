baseURL = "https://api.spark.io/v1/devices/";



function getRequestURL(devId, functionName) {
  return baseURL + devId + "/" + functionName;
}


function getVariable(devId, varName, accessToken) {
  //GET Request to retrieve variable data
  requestURL = getRequestURL(devId, varName);

  //Initial Value for the var
  value = "";

  $.ajax({
    async: false,
    type: 'GET',
    data: {
      access_token: accessToken
    },
    url: requestURL,
    success: function(data) {
      value = data.result;
    }
  });

  return value;
}
