var User = require('../models/User')
var bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require('nodemailer');

function sendemail(user) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: false,
		port: 5432,
		auth: {
			user: 'hafizh46@gmail.com',
			pass: process.env.PASS
		},
		tls: {
			rejectUnauthorized: false
		}
	})
	let HelperOptions = {
		from: "HackTivFLoW" < 'hafizh46@gmail.com',
		to: user.email,
		subject: "Welcome to hacktiv-flow",
		text: `
		Congrats! Your account has successfully been created :)
		
By being part of the Hack-flow community, you can practice and improve your programming skills while helping each other.

P.S. To have an even better experience, you can invite your friends, and schoolmates.

    `
	};
	transporter.sendMail(HelperOptions, (err, info) => {
		if (err) {
			return console.log(err);
		} else {
			console.log("The message was sent!");
			console.log(info);
		}
	})
}

const signup = (req,res)=>{
	let user = new User({
		email: req.body.email,
		password: req.body.password
	})
	bcrypt.hash(user.password, saltRounds, function (err, hash) {
		user.password = hash
		user.save()
		 .then(doc=>{
			 res.status(200).send({message:'created',data:doc})
			 sendemail(doc)
		 }).catch(err=>{res.send({err,message:'error'})})
	});
}

module.exports = {
	signup
}