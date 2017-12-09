const db = require('../index');
const Sequelize = require('sequelize');



const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
            notEmpty: true
        }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://i.dailymail.co.uk/i/pix/2016/11/25/05/3AAB1D1300000578-0-image-a-100_1480050515605.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
})


module.exports = Campus
