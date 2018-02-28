var jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
	console.log('masuk sini auth')
	jwt.verify(req.headers.token, process.env.BCRYPT, function (err, decoded) {
		 if(decoded){
			 console.log(decoded._doc._id,'ini decoed')
			 req.headers.userid = decoded._doc._id
			 console.log('ini header auth',req.headers)
			 next()
		 }else{
			 res.send('tidak ada auth coy')
		 }
	});
}
module.exports = {
	auth
}