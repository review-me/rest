/**
* Connecting config file to the project
* Nconf
*/

(function() {
    var nconf = require('nconf'),
        path = require('path');

    nconf.argv()
        .env()
        .file({ file: path.join(__dirname, (!process.env.NODE_ENV ||
            process.env.NODE_ENV === 'test' ?
            'development' : process.env.NODE_ENV) + '_config.json') });

    module.exports = nconf;
})();
