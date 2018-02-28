var express = require('express');
var router = express.Router();
var controllersignin =  require('../controllers/signin')
router.post('/',controllersignin.signin)

module.exports = router