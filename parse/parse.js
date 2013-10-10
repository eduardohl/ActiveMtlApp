module.exports = function(){
	var Kaiseki = require('kaiseki');

	var settings = {
		ApiKey: 'dGMkfurxsmmcx152WgRDw7MBYunmnGpJSQoBT4Cd',
		RESTApiKey: 'ZZfiaIVXWB6ZE1qzfYFyWlCxYVFoUQKZZ478VLiJ'
	};

	var Parse = Parse || new Kaiseki(settings.ApiKey, settings.RESTApiKey);

	var params = {
		where: {
			eventType: 'Alert',
			location: {
	          "$nearSphere": {
	            "__type": "GeoPoint",
	            "latitude": 45.4850394,
	            "longitude": -73.5602582
	          }
	        }
		},
		limit: 3,
		count: true
	};

	var extractParams = function(params, options){
		if(options.hasOwnProperty('latitude') && options.hasOwnProperty('longitude')){
			params.location = {
				"$nearSphere": {
	            	"__type": "GeoPoint",
	            	"latitude": options.latitude,
	            	"longitude": options.longitude
	        	}
			};
		}

		return params;
	};

	return {
        getIdeas: getIdeas,
        getChallenges: getChallenges,
        getAlerts: getAlerts,
        getDetail: getDetail,
        getLatest: getLatest
    };

    /*
	 * Idea objects list order by location proximity
	*/
    function getIdeas(options, callback){
		var params = {
			where: extractParams({
				eventType: 'Idea'
			}, options)
		};

		Parse.getObjects('Event', params, function(err, res, body, success){
			var error = false;
			if(!success){
				error = true;
			}

			callback(error, body);
		});
	};

	/*
	 * Challenge objects list order by location proximity
	*/
	function getChallenges(options, callback){
		var params = {
			where: extractParams({
				eventType: 'Challenge'
			}, options)
		};

		Parse.getObjects('Event', params, function(err, res, body, success){
			var error = false;
			if(!success){
				error = true;
			}

			callback(error, body);
		});
	};

	/*
	 * Alert objects list order by location proximity
	*/
	function getAlerts(options, callback){
		var params = {
			where: extractParams({
				eventType: 'Alert'
			}, options)
		};

		Parse.getObjects('Event', params, function(err, res, body, success){
			var error = false;
			if(!success){
				error = true;
			}

			callback(error, body);
		});
	};	

	/*
	 * Single object by ID
	*/
	function getDetail(id, callback){
		var params = {
			where: {
				objectId: id
			}
		};

		Parse.getObject('Event', id, function(err, res, body, success){
			var error = false;
			if(!success){
				error = true;
			}

			callback(error, body);
		});
	};

	/*
	 * Homepage content list 
	*/
	function getLatest(callback){
		callback(false, []);
	};
}