var GitHubStrategy = require('passport-github').Strategy,
    config = require('./../../config');

/**
 * Конфигурация Passport
 */

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    passport.use(new GitHubStrategy({
                clientID: config.get('passport:clientID'),
                clientSecret: config.get('passport:clientSecret'),
                callbackURL: config.get('passport:callbackURL')
            },
            function(accessToken, refreshToken, profile, done) {
                done(null, { token: accessToken, profile: profile._json });
                // User.findOne({
                //     oauthID: profile.id
                // }, function(err, user) {
                //     if (err) {
                //         console.log(err);
                //     }
                //     if (!err && user != null) {
                //         done(null, user);
                //     } else {
                //         var user = new User({
                //             oauthID: profile.id,
                //             name: profile.displayName,
                //             created: Date.now()
                //         });
                //         user.save(function(err) {
                //             if (err) {
                //                 console.log(err);
                //             } else {
                //                 console.log("saving user ...");
                //                 done(null, user);
                //             };
                //         });
                //     };
                // });
            })
    );
}
