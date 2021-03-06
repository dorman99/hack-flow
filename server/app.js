var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var signin =  require('./routes/signin')
var questions = require('./routes/question')
var answers = require('./routes/answer')
var signup = require('./routes/signup')
require('dotenv').config()
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackflow');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/', index);
app.use('/users', users);
app.use('/signin',signin)
app.use('/questions',questions)
app.use('/answers',answers)
app.use('/signup',signup)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
