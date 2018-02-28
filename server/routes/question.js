var express = require('express');
var router = express.Router();
var controllerQuestion =  require('../controllers/questions')
var auth = require('../middlewares/authlogin')

router
 .post('/',auth.auth,controllerQuestion.createQuestion)
 .put('/',auth.auth,controllerQuestion.votes)
 .get('/',controllerQuestion.findall)
 .delete('/:id',controllerQuestion.deleteQuestion)
 .put('/:id',auth.auth,controllerQuestion.editques)
module.exports = router