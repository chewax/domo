angular.module('settings', [])

.factory('Config', function() {

	config = [
		{
			name:'baseURL', 
			description:'Base Spark-API URL', 
			value: "https://api.spark.io/v1/devices"
		},
		{
			name:'apiURL', 
			description: 'Domo API Base URL',
			value: "http://dwaxmbook.local:5000"
		}
	]

	return {

		all: function() {
			return config;
		},

		get: function(query_name) {
			for(var i=0; i < config.length; i++){
				if (config[i].name == query_name){
					return config[i];
				}
			}
		},
	}
})