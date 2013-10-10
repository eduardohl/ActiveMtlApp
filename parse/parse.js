module.exports = function(){
	var Kaiseki = require('kaiseki');

	var settings = {
		ApiKey: 'dGMkfurxsmmcx152WgRDw7MBYunmnGpJSQoBT4Cd',
		RESTApiKey: 'ZZfiaIVXWB6ZE1qzfYFyWlCxYVFoUQKZZ478VLiJ'
	};

	var Parse = Parse || new Kaiseki(settings.ApiKey, settings.RESTApiKey);

	return {
        getIdeas: getIdeas,
        getChallenges: getChallenges,
        getAlerts: getAlerts,
        getDetail: getDetail
    };

    /*
	 * Idea objects list order by location proximity
	*/
    function getIdeas(options, callback){
		var params = {
			where: {
				eventType: 'Idea'
			}
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
			where: {
				eventType: 'Challenge'
			}
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
			where: {
				eventType: 'Alert'
			}
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