var express = require('express');
var router = express.Router();
var auth  = require('../middlewares/authlogin')
var controllerAnswer = require('../controllers/answers')
router
 .post('/:questionid',auth.auth,controllerAnswer.createAnswer)
 .put('/',auth.auth,controllerAnswer.votes)
 .get('/:questionid',controllerAnswer.findbyquestionid)
 .delete('/',controllerAnswer.destroy)
module.exports = router