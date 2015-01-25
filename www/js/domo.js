baseURL = "https://api.spark.io/v1/devices/";



function getRequestURL(devId, functionName) {
	return baseURL + devId + "/" + functionName;
}
