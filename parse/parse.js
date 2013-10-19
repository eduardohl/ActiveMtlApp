module.exports = function(){
	var Kaiseki = require('kaiseki');

	var settings = {
		ApiKey: 'dGMkfurxsmmcx152WgRDw7MBYunmnGpJSQoBT4Cd',
		RESTApiKey: 'ZZfiaIVXWB6ZE1qzfYFyWlCxYVFoUQKZZ478VLiJ'
	};

	var Parse = Parse || new Kaiseki(settings.ApiKey, settings.RESTApiKey);

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
        getLatest: getLatest,
        getUser: getUser
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

			callback.apply(null, [error, body]);
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

			callback.apply(null, [error, body]);
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

			callback.apply(null, [error, body]);
		});
	};	

	/*
	 * Single object by ID
	*/
	function getDetail(options, callback){
		var id = options.id
		  , params = {userId: null};

		if(options.hasOwnProperty('userId') && options.userId){
			params.userId = options.userId;
		}

		Parse.getObject('Event', id, params, function(err, res, body, success){
			var error = false;

			if(!success){
				error = true;
			}

			callback.apply(null, [error, body]);
		});
	};

	function getUser(id, callback){
		
		Parse.getObject('_User', id, function(err, res, body, success){
			var error = false;

			if(!success){
				error = true;
			}

			callback.apply(null, [error, body]);
		});
	};

	/*
	 * Homepage content list 
	*/
	function getLatest(callback){

		Parse._jsonRequest({
      		url: '/1/functions/getLatestEvents',
      		method: 'POST',
      		headers: { 'Content-type': 'application/json'},
      		params: {},
	      	callback: function(err, res, body, success) {
	        	var error = false;
	        	if (err && !success){
	        		error = true;
	        	}

	        	callback.apply(null, [false, body]);
	      	}
	    });
	};
}