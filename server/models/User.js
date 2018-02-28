var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String,unique:true},
	password: String
})

var User = mongoose.model('User', userSchema);
module.exports = User