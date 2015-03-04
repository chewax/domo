angular.module('settings', [])

.service('Config', function() {

	var config = [
		{
			name:'baseURL', 
			description:'Base Spark-API URL', 
			value: "https://api.spark.io/v1/devices"
		},
		{
			name:'apiURL', 
			description: 'Domo API Base URL',
			value: "http://dwaxmbook.local:5000"
		},
		{
			name:'apiToken',
			description: 'Token to access node API',
			value: ''
		}
	];

	return {

		all: function() {
			return config;
		},

		get: function(name) {
			for(var i=0; i < config.length; i++){
				if (config[i].name == name){
					return config[i];
				}
			}
		},

		set: function(name, val) {
			for(var i=0; i < config.length; i++){
				if (config[i].name == name){
					config[i].value = val;
				}
			}	
		},

	};
});