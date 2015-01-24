baseURL = "https://api.spark.io/v1/devices/";
devId = "54ff6e066672524839521167";
ledState = null;


$(document).ready(function() {

  //GET initial value
  // state = getVariable(devId,"led-state");
  // updateLedState(state);
});

function getAccessToken() {
  return "fccc9e8d2c6fcea4eb963fcf7ca76cc51292eb37";
}

function getRequestURL(devId, functionName) {
  return baseURL + devId + "/" + functionName;
}

function updateLedState(newState) {
  ledState = newState;
  if (ledState == 1) {
    $("#led-01").removeClass("off");
    $("#led-01").addClass("on");
  } else {
    $("#led-01").addClass("off");
    $("#led-01").removeClass("on");
  }
}

function getVariable(devId, varName) {
  //GET Request to retrieve variable data
  requestURL = getRequestURL(devId, varName);
  accessToken = getAccessToken();

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
