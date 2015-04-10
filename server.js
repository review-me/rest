var restify = require('restify'),
    config = require('./config'),
    passport = require('passport'),

    server = restify.createServer(config.get('server:options'));

server.use(restify.queryParser({ mapParams: false }));
server.use(restify.bodyParser({ mapParams: true }));
server.use(restify.CORS({
    headers: ['Access-Control-Allow-Origin']
}));

require('./libs/passport')(passport, server);
server.use(passport.initialize());

require('./routes')(server, passport);

server.listen(process.env.PORT || config.get('server:port'));

module.exports = server;
