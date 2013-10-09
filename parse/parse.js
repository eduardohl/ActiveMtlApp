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
        getIdea: getIdea,
        getChallenge: getChallenge,
        getAlert: getAlert,
        getLatest: getLatest
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
		callback(false, []);
	};

	/*
	 * Alert objects list order by location proximity
	*/
	function getAlerts(options, callback){
		callback(false, []);
	};	

	/*
	 * Idea single object
	*/
	function getIdea(id, callback){
		callback(false, []);
	};

	/*
	 * Challenge single object
	*/
	function getChallenge(id, callback){
		callback(false, {});
	};

	/*
	 * Alert single object
	*/
	function getAlert(id, callback){
		callback(false, {});
	};

	/*
	 * Homepage content list 
	*/
	function getLatest(callback){
		callback(false, []);
	};
}