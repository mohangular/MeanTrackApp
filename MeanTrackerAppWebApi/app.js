var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./DB');
var bodyParser = require('body-parser');
var cors = require('cors');
var indexRouter = require('./routes/index.route');
var timesheetRouter = require('./routes/timesheet.route');
var favicon = require('serve-favicon');
var passport = require('passport');
require('./models/db');
require('./config/passport');
var adminRouter = require('./routes/admin.route');
var dashboardRouter = require('./routes/dashboard.route')
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
var app = express();
app.use(passport.initialize());

require("dotenv").config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/dashboard', dashboardRouter);
app.use('/timesheet', timesheetRouter);
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // error handlers
  // Catch unauthorised errors
  res.status(err.status || 500);
  res.render('error');
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

module.exports = app;
