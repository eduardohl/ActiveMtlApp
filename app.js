
/**
 * Module dependencies.
 */

var express = require('express')
  , user = require('./routes/user')
  , http = require('http')
  , fs = require('fs')
  , path = require('path')
  , cons = require('consolidate')
  , dust = require('dustjs-linkedin');

var app = express();

app.utils = require('./utils/utils')();
app.parse = require('./parse/parse')();

var routes = require('./routes/index')(app);

app.engine('dust', cons.dust);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use( express.cookieParser() );
app.use(app.router);

app.use(express.session({ secret: 'very_unique_eco_hack_secret_string', cookie: { maxAge: 1800000 }}));

app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/issues/', routes.alerts);
app.get('/issues/:lat/:lon', routes.alerts);
app.get('/challenges/', routes.challenges);
app.get('/challenges/:lat/:lon', routes.challenges);
app.get('/ideas/', routes.ideas);
app.get('/ideas/:lat/:lon', routes.ideas);
app.get('/details/:id', routes.detail);

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
