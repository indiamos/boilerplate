const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/boilerbase', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

//needs to be exported before the requiring the models
module.exports = db;

// run our models file (makes all associations for our Sequelize objects)
require('./models');


