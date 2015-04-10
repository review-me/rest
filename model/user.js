/**
 * Инициализация модели User
 */

var mongoose = require('./../libs/mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    HttpError = require('./../errors/httpError'),
    vow = require('vow'),

    UserSchema = new Schema({
        login: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

});

UserSchema.methods = {
};

UserSchema.statics = {
};

exports.User = mongoose.model('User', UserSchema);
