const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var UserSchema = new schema({
    first_name:String,
    last_name:String,
    email:String,
    status:String,
    
    last_login:String,
    gender:String,
    birthdate:String,
    home_phone:String,
    street:String,
    city:String,
    state:String,
    country:String,
    zip:String,
    mobile:String,
    
    pic_url:String,
    username:String,
    password:String,
    access_token:String,
    signature:String
});

module.exports = mongoose.model('User',UserSchema);