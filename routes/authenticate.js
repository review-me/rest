module.exports = function(server, passport) {

    server.get('/auth/github', passport.authenticate('github'));

    server.get('/auth/github/callback',
        passport.authenticate('github', {
            failureRedirect: '/'
        }),
        function(req, res) {
            var user = req.user;

            res.writeHead(302, { Location: 'http://localhost:3000/build/build.html?token=' + user.token + '&login=' + user.profile.login + '&name=' + user.profile.name });
            res.end();
        });
}
