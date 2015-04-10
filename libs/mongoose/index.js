/**
 * Конфигурация Mongoose
 */

(function() {
    'use strict';

    var mongoose = require('mongoose'),
        config = require('./../../config');

    var db =  mongoose.connection,
        dbConnect = function() {
            return mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
        };

    dbConnect(); //Connecting Database

    db.on('error', function(err) {
        log.error('Database error: ', err.message);
    });

    db.on('disconnect', function() {
        log.warn('Database disconnected');
        dbConnect();
    });

    db.once('open', function() {
       log.info('Database connect successful');
    });

    module.exports = mongoose;
})();
