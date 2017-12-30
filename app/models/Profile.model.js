const mongoose = require('mongoose');
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var ProfileSchema = new schema({
    user_id:String,
    first_name:String,
    last_name:String,
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
    fb_token:String
});

module.exports = mongoose.model('Profile',ProfileSchema);