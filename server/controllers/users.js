var User = require('../models/User')

const allusers = (req,res) => {
	User.find()
	 .then(docs=> {
		 res.status(200).send({message:'heres all uses',data:docs})
	 })
	 .catch(err=>{res.send(err)})
}

const createUser = (req,res) => {
	let user =  new User({
		email: req.body.email,
		password: req.body.password
	})
	console.log('ini masuk users')
	 user.save()
	  .then(doc => {
			console.log('masuk isini ga?')
			res.status(200).send({message:'user created',data:doc})
		})
		.catch(err => {
			res.send(err)
		})
}

const editUser = (req,res) => {
	User.findOne({
		"_id": req.params.id
	})
	 .then(doc => {
		 doc.email = req.body.email,
		 doc.save()
		  .then(updated=> {
				res.status(200).send({message:'user updated',data:updated})
			})
			.catch(err=>{
				res.send(err)
			})
	 })
	 .catch(err=>{res.send(err)})
}

const deleteUser = (req,res) => {
	User.remove({
		"_id":req.body.userid
	}).then(result => {
		res.status(200).send({message:'user has been delted',data:result})
	})
}

module.exports = {
	allusers,
	createUser,
	editUser,
	deleteUser
}