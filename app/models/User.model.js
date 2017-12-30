const mongoose = require('mongoose');
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var UserSchema = new schema({
    name:String,
    email:String,
    token:String,
    term:Boolean,
    status:Boolean,
    last_login:String,
    profile_id:String
});

module.exports = mongoose.model('User',UserSchema);