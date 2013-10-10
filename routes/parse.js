
/*
 * GET parse request.
 */

var Kaiseki = require('kaiseki');

exports.index = function(req, res){
	var ApplicationName = 'ActiveMtl',
		ApiKey = 'dGMkfurxsmmcx152WgRDw7MBYunmnGpJSQoBT4Cd',
		ClientKey = 'p6Wiob7a5YVl98AwBZwFDCHGeG3LRvfjRPbQry6x',
		RESTApiKey = 'ZZfiaIVXWB6ZE1qzfYFyWlCxYVFoUQKZZ478VLiJ';

	var requester = new Kaiseki(ApiKey, RESTApiKey);

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

	requester.getObjects('Event', params, function(err, res, body, success){
		if(success){
			console.log(body);
		}
	});

	res.render('parse', {});
};