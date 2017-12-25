const mongoose = require('mongoose');
const bluebird = require('bluebird');
const schema = mongoose.Schema;
mongoose.Promise = bluebird;

var RoleSchema = new schema({
    role_id:String,
    name:String,
    status:String
});

module.exports = mongoose.model('Role',RoleSchema);