const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.listen(3000, function () {
  console.log("Cats cats cats! Listening on port 3000.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));app.use(morgan('dev'));

app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, '../public')));


// Any routes or other various middlewares should go here!
app.use('/api', require('./api'));

// Make sure this is right at the end of your server logic!
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
