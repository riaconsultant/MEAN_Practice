const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var UserSchema = new schema({
    first_name:String,
    last_name:String,
    email:String,
    awana_role: Array,
    church_role:String,
    acct_owner:String,
    access_level:String,
    status:String,
    has_personal_acct:String,
    
    
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
    
    // "update_url":"/userManagement/details?id=a1Y50000009TXHiEAO",
    // "reject_url":"/userManagement/reject_affiliation?id=a1Y50000009TXHiEAO",
    // "remove_url":"/userManagement/remove_affiliation?id=a1Y50000009TXHiEAO",
    // "approve_url":"/userManagement/details?msg=approve&id=a1Y50000009TXHiEAO",
});

module.exports = mongoose.model('User',UserSchema);