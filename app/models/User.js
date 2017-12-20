
let mongoose = require('mongoose');
let bluebird = require('bluebird');

mongoose.connect("")

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    pass: String,
    token: String
});

module.exports = mongoose.model('User',UserSchema);