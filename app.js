var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var logger = require('morgan');
var methodOverride = require('method-override');

var userRouter = require('./src/routes/userRoutes')
var boardRouter = require('./src/routes/boardRoutes');
var mbtiRouter = require('./src/routes/mbtiRoutes');
var managerRouter = require('./src/routes/managerRoutes')
var wholeRouter = require('./src/routes/wholeRoutes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized:true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method", {
  methods: ["POST", "GET", "DELETE"]
}))


app.use('/board', boardRouter);
app.use('/user', userRouter);
app.use('/mbti', mbtiRouter);
app.use('/manager', managerRouter);
app.use('/whole', wholeRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
