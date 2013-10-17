
/*
 * GET home page.
 */

module.exports = function(app){
    return {
        index:index,
        alerts:alerts,
        challenges:challenges,
        ideas:ideas,
        detail:detail
    };

    function index(req, res){

        var next = function(err, data){

            if(!err){
                data.title = "this is a generic title";
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
                data.type = "problemes";
                res.render('list', {data: data});
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
                data.type = "defis";
                res.render('list', {data: data});
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
                data.type = "idees";
                res.render('list', {data: data});
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };


        app.parse.getIdeas(options, next);

    }

    function detail(req, res){

        var options = app.utils.getRequestedElemId(req);

        var next = function(err, data){

            if(!err && options !== null){
                res.render('detail', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }
        };

        app.parse.getDetail(options, next);
    }
}