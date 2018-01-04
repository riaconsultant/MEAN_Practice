const mongoose = require('mongoose');
const bluebird = require('bluebird');
passportlocalMongoose = require('passport-local-mongoose');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var UserSchema = new schema({
    username:String,
    first_name:String,
    last_name:String,
    email:String,
    token:String,
    term:Boolean,
    status:Boolean,
    last_login:String,
    profile_id:String
});

UserSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('User',UserSchema);