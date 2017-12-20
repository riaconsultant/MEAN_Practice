const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var AddressSchema = new schema({
    loggedIn:String,
    name:String,
    mobile:String,
    address:String,
    city:String,
    zip:Number,
    state:Number,
    country:Number,
    prefered:Boolean
});

module.exports = mongoose.model('Address',AddressSchema);