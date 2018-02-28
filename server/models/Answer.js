var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	questionId: { type: Schema.Types.ObjectId, ref: '{Question}' },
	answer : {type: String, required:true},
	point: {type: Number,default:0},
	votes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

var Answer = mongoose.model('Answers', answerSchema);
module.exports = Answer