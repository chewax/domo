angular.module('domo.conf', [])

.service('_conf', function(_) {

	var config = [
		{
			name:'photonURL', 
			description:'Base photon API URL', 
			value: "https://api.spark.io/v1/devices"
		},
		{
			name:'apiURL', 
			description: 'Domo API Base URL',
			value: "http://dwaxmbook.local:5000"
		},
		{
			name:'apiVersion',
			description: 'Domo API version',
			value: ''
		}
	];

	return {

		all: function() { return config; },

		get: function(name) {
			var idx = _.findIndex(config, function(entry) { return entry.name == name; });
			return config[idx];
		},

		set: function(name, val) {
			var idx = _.findIndex(config, function(entry) { return entry.name == name; });
			config[idx].value = val;
		},

	};

});