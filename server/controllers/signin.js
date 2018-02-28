var jwt = require('jsonwebtoken');
var User = require('../models/User')
var bcrypt = require('bcrypt');
const signin = (req,res)=>{
	User.findOne({
		email: req.body.email
	}).then(doc=>{
		if(doc){
			bcrypt.compare(req.body.password,doc.password)
			 .then(result=>{
				 let payload = {
					 ...doc
				 }
				 let token = jwt.sign(payload, process.env.BCRYPT)
				 res.status(200).send({ message: 'user has been logged in,token: ', data: token,iduser:doc._id })
			 })
		
		}else{
			res.send({message:'invalid'})
		}
	})
	.catch(err=>{
		console.log('ini??')
		res.send(err)
	})
}

module.exports = {
	signin
}