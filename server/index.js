const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('../db/_db');

if (process.env.NODE_ENV === 'development') {
  require('./localSecrets'); // this will mutate the process.env object with your secrets.
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));app.use(morgan('dev'));

app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, '../public')));


// Any routes or other various middlewares should go here!
app.use('/api', require('./api'));
app.use('/auth', require('./auth'));

// Make sure this is right at the end of your server logic!
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//authentication middleware?
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});


app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()  // sync our database
.then(() => (
  app.listen(3000, function () {
  console.log("Cats cats cats! Listening on port 3000.");
  })
)) // then start our express server

