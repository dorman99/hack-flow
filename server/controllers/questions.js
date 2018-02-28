var Question  = require('../models/Question')
var Answer 		= require('../models/Answer')

const createQuestion = (req,res) =>{
	console.log(req.headers)
	let question = new Question({
		userId : req.headers.userid,
		question: req.body.question,
		title: req.body.title
	})
	question.save()
	 .then(doc=>{
		 res.status(200).send({message:'question has been created, ',data:doc})
	 }).catch(err=>{
		 res.send(err)
	 })
}

const editques = (req,res) => {
	Question.findOne({
		'_id': req.params.id
	}).then(doc => {
		doc.title =  req.body.title,
		doc.question = req.body.question
		doc.save()
		.then(result=>{
			res.status(200).send({message:'udpdated questions'})
		}).catch(err=>{res.send(err)})
	}).catch(err=>{res.send(err)})
}

const findall = (req,res)=>{
	Question.find().populate('userId')
	 .then(docs => {
		 let arrPromise = []
		 let index = 0

		 function each (){
			 console.log('each jalan')
			let count = 0
			 	 docs.forEach(el=>{
				 	let arr = []
				 	Answer.find({
					'questionId': el._id
					}).populate('userId')
					.then(docAn=>{
							el.answers = docAn
							console.log(index,'iii')
							if(index == docs.length-1){
								res.status(200).send({ message: 'all questions ', data: docs.reverse() })
							}else{
								index++
							}
					}).catch(err=>{res.send(err)})
				})
		 }

			function send(docupdate){
				console.log('ini jalan')
				// res.status(200).send({ message: 'all questions ', data: docs })
			} 	

		 const runas = async ()=>{
			 try {
				//  asyncForEach( (each(),send(each))=>{
				// 	 await waitFor(50)
				//  })
					const first = await each()
					// const second = await send(first)
			 }
			 catch (error){

			 }
		 }
		 runas()
	 })
	 .catch(err=>{
		 res.send(err)
	 })
}


const deleteQuestion = (req,res)=>{
	Question.remove({
		"_id":req.params.id
	}).then(result=>{
		res.status(200).send({message:'deleted',data:result})
	})
	.catch(err=>{
		res.send(err)
	})
}

const votes = (req,res)=>{
	// console.log('masuk vote')
	// console.log('lalal',req.body)
	if(req.body.vote == 'like'){
		// console.log('masuk sini')
		Question.findOne({
			"_id":req.body.questionid
		}).then(doc=>{
			console.log('ini headers',req.headers)
			let find = doc.votes.filter(function(el){
				return el == req.headers.userid
			})
			// console.log('find',find)
			if (find.length == 0){
				doc.point++
				doc.votes.push(req.headers.userid)
				doc.save()
				 .then(doc=>{
					 res.status(200).send({message:'votes updated',data:doc})
				 })
				 .catch(err=>{
					 res.send(err)
				 })
			}else{
				res.send('invalid')
			}
		})
		.catch(err=>{
			res.send(err)
		})
	}else{
		Question.findOne({
			"_id": req.body.questionid
		}).then(doc => {
			// console.log('ini headers', req.headers)
			let find = doc.votes.filter(function (el) {
				return el == req.headers.userid
			})
			// console.log('find',find)
			if (find.length == 0) {
				doc.point--
				doc.votes.push(req.headers.userid)
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

const destroy =  (req,res)=>{
	Question.remove({
		"_id":req.body.questionid
	}).then(doc=>{
		res.status(200).send({message:'question has been delete ',data:doc})
	})
	 .catch(err=>{res.send(err)})
}

module.exports = {
	createQuestion,
	findall,
	deleteQuestion,
	votes,
	destroy,
	editques
}