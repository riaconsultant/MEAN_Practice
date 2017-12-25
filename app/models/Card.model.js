const mongoose = require('mongoose');
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var CardSchema = new schema({
    loggedIn:String,
    cardnumber:String,
    expiredate:String,
    name:String,
    cvv:String,
    nickname:String,
    prefered:Boolean
});

module.exports = mongoose.model('Card',CardSchema);