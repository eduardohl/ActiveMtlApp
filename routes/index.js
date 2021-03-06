
/*
 * GET home page.
 */

module.exports = function(app){
    return {
        index:index,
        alerts:alerts,
        challenges:challenges,
        ideas:ideas,
        detail:detail,
        test: test
    };

    function index(req, res){

        var next = function(err, data){

            if(!err){
                data.context = "home";

                var highlight = null
                  , challenges = data.result.challenges
                  , length = challenges.length;
                if(challenges && length > 1){
                    highlight = challenges.slice(0, 1);
                    data.result.challenges = challenges.slice(1);
                    data.result.highlight = highlight;
                }

                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };

        app.parse.getLatest(next);
    }

    function alerts(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){
            if(!err){
                res.render('list', {total: data.length, data: data, type: "problemes", icon: "alert", alert: true});
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };

        app.parse.getAlerts(options, next);

    }

    function challenges(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){
            if(!err){
                var highlight = data.splice(0, 1);

                res.render('list', {total: data.length, highlight: highlight, data: data, type: "defis", icon: "defi", challenge: true});
            } else {
                res.render('404', {errorMessage: 'Express'});
            }

        };

        app.parse.getChallenges(options, next);

    }

    function ideas(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){
            if(!err){
                res.render('list', {total: data.length, data: data, type: "idees", icon: "idee", idea: true});
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };


        app.parse.getIdeas(options, next);
    }

    function detail(req, res){

        var options = app.utils.getRequestedElemId(req);
        var userid = app.utils.getUserId(req);
        var next = function(err, data){

            if(!err && options !== null){
                if(userid !== null){
                    data.user = userid;
                }

                if(data.Statut === 'True'){
                    data.Status = {text: 'dummy'};
                }

                var timeAgo = app.utils.timeAgo(new Date(data.createdAt));
                data.timeago = timeAgo;

                //Event type
                switch(data.eventType){
                    case 'Challenge': 
                        data.challenge = true;
                    break;
                    case 'Idea':
                        data.idea = true;
                    break;
                    default:
                        data.alert = true;
                    break;
                }

                switch(data.Vote){
                    case 0:
                        data.NoVote = true;
                    break;
                    case 1:
                        data.OneVote = true;
                    break;
                    case 2:
                        data.TwoVotes = true;
                    break;
                    case 3:
                        data.ThreeVotes = true;
                    break;
                    default:
                        data.MultiVotes = true;
                    break;
                }

                //Location override
                if(data.location){
                    var loc = data.location;
                    if(loc.latitude == 0.0 && loc.longitude == 0.0){
                        data.location = null;
                    }
                }

                app.parse.getEventStats(data.objectId, function(err, rep){
                    if(!err){
                        if(rep.hasOwnProperty('result')){
                            var r = rep.result;
                            if(r.hasOwnProperty('eventAuthor')){
                                data.username = r.eventAuthor;
                            }

                            if(r.hasOwnProperty('count_actions')){
                                data.actionCount = r.count_actions;
                            }

                            if(r.hasOwnProperty('latestActions')){
                                if(r.latestActions.length > 0){
                                    data.latestUser1 = r.latestActions[0];
                                }

                                if(r.latestActions.length > 1){
                                    data.latestUser2 = r.latestActions[1];
                                }
                            }
                        }
                    }

                    res.render('detail', data);
                });
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };

        app.parse.getDetail({id: options, userId: userid}, next);
    }

    function test(){
        app.parse.getEventStats('eSHV76oDof', function(err, data){
            if(!err){
                console.log(data);
            } else console.log('Error');
        });
    }
}