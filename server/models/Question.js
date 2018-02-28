var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	title: {type: String, required:true},
	question: {type: String,required:true},
	point: {type: Number,default:0},
	answers: [],
	votes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

var Question = mongoose.model('Question', questionSchema);
module.exports = Question