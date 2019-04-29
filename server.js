const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
var logger = require("morgan");
// var db = require("/models");


////allows mongostore to access sessions by passing it (sessions)
const MongoStore = require('connect-mongo')(session);



// Heroku Mongo DB connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crsexpress", { useNewUrlParser: true })
// local mongodb connection
mongoose.connect("mongodb://localhost:27017/crsexpress",  { useNewUrlParser: true });
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

//use sessions for tracking logins
//store: save sessions to mongo, not RAM
//needs to be after mongoose.connect because db not yet
app.use(session({
  secret: 'beware of little expenses',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use(function (req, res, next){
  res.locals.currentUser = req.session.userId;
  next();
});

// Use morgan logger for logging requests
app.use(logger("dev"));

// parse incoming requests: if problem look at app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use(express.static('public'));


//USE IN PRODUCTION
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


const routes = require('./routes');
app.use(routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('error here');
  res.status(500).json({
    message: err.message,
    error: err
  });
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
