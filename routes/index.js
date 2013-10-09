
/*
 * GET home page.
 */


module.exports = function(app){
    return {
        index:index
    };


    function index(req, res){

        var options = app.utils.getResquestLocation(req);

        var next = function(err, data){

            if(err === null){
                data.title = "this is a generic title";
                console.log("test",data);
                res.render('index', data);
            } else {
                res.render('404', { errorMessage: 'Express' });
            }

        };

        app.parse.getDefi(options, next);

    }
}