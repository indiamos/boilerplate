const Sequelize = require('sequelize')
const db = require('../_db.js')


module.exports = db.define('product', {
name: {
    type:Sequelize.TEXT,
    allowNull: false
  },
price:{
    type:Sequelize.INTEGER,
    allowNull:false
  }, 
SKU:{
    type:Sequelize.STRING,
    allowNull:false
  }
})

