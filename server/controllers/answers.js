var Answer = require('../models/Answer')
var Question = require('../models/Question')

const createAnswer = (req,res)=>{
	let answer = new Answer({
		userId : req.headers.userid,
		answer: req.body.answer,
		questionId: req.params.questionid,
	})

	answer.save()
	 .then(doc=>{
		Question.findOne({
			'_id': req.params.questionid
		}).then( ques=>{
			Answer.find({
				'questionId': ques._id
			}).then(arrAns=>{
				console.log('ini arrans',arrAns	)
				ques.answers = arrAns
				console.log('ini ques',ques)
				// console.log()
				res.status(200).send({message:'answer created, ',data:doc,ques:ques})
			})
		}) .catch(err=>{res.send(err)})
	 })
	 .catch(err=>{
		 res.send(err)
	 })
}

const all = (req,res)=>{
	Answer.find()
	 .then(docs=>{
		 res.status(200).send({message:'all answer',data:docs})
	 })
	 .catch(err=>{res.send(err)})
}

const findbyquestionid = (req,res)=>{
	Answer.find({
		"questionId":req.params.questionid
	})
	 .then(docs=>{
		 res.status(200).send({message:'all answer by question ',data:docs})
	 }).catch(err=>{res.send(err)})
}
const votes = (req,res) => {
	if (req.body.vote == 'like') {
		console.log('masuk sini')
		Answer.findOne({
			"_id": req.body.answerid
		}).then(doc => {
			// console.log('ini headers',req.headers)
			let find = doc.votes.filter(function (el) {
				return el == req.headers.userid
			})
			// console.log('find',find)
			if (find.length == 0) {
				doc.votes.push(req.headers.userid)
				doc.point++
				doc.save()
					.then(doc => {
						res.status(200).send({ message: 'votes updated', data: doc })
					})
					.catch(err => {
						res.send(err)
					})
			} else {
				res.send('invalid')
			}
		})
			.catch(err => {
				res.send(err)
			})
	} else {
		Answer.findOne({
			"_id": req.body.answerid
		}).then(doc => {
			// console.log('ini headers',req.headers)
			let find = doc.votes.filter(function (el) {
				return el == req.headers.userid
			})
			// console.log('find',find)
			if (find.length == 0) {
				doc.votes.push(req.headers.userid)
				doc.point--
				doc.save()
					.then(doc => {
						res.status(200).send({ message: 'votes updated', data: doc })
					})
					.catch(err => {
						res.send(err)
					})
			} else {
				res.send('invalid')
			}
		})
			.catch(err => {
				res.send(err)
			})
	}
}

const destroy = (req,res) =>{
	console.log('ini server delete', req.body)
	console.log('....', req.headers)
	Answer.remove({
		"_id":req.headers.answerid
	}).then(doc=>{
		console.log(doc)
		res.status(200).send({message:'has been deleted',data:doc})
	})
	 .catch(err=>{res.send(err)})
}

module.exports = {
	createAnswer,
	destroy,
	votes,
	findbyquestionid
}