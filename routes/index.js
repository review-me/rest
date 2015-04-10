module.exports = function(server, passport) {

    server.get('/', function(req, res) {
        res.send({ Hello: 'World' });
    });
    require('./authenticate')(server, passport);
};
