var express = require('express');
var router = express.Router();
var userConteroller =  require('../controllers/users')
var auth = require('../middlewares/authlogin')

// auth dan jwt udah siap

/* GET users listing. */
router
 .get('/',auth.auth,userConteroller.allusers)
 .post('/',userConteroller.createUser)
 .put('/:id',userConteroller.editUser)

module.exports = router;
