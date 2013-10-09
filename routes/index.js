
/*
 * GET home page.
 */


module.exports = function(app){
    return {
        index:index,
        issues:issues,
        challenges:challenges,
        ideas:ideas,
        details:details
    };

    function index(req, res){

        var options = {};

        var next = function(err, data){

            if(!err){
                data.title = "this is a generic title";
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getHome(options, next);

    }

    function issues(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){

            if(!err){
                data.title = "this is a generic title";
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getIssues(options, next);

    }

    function challenges(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){

            if(!err){
                data.title = "this is a generic title";
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getChallenges(options, next);

    }

    function ideas(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){


            if(!err){
                data.title = "this is a generic title";
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getIdeas(options, next);

    }

    function details(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){

            if(!err){
                data.title = "this is a generic title";
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getDetails(options, next);

    }


}