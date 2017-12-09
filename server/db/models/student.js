const db = require('../');
const Sequelize = require('sequelize');
const Campus = require('./Campus')


const Student = db.define('student', {

    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    gpa: {
      type: Sequelize.DECIMAL(2,1),
      validate: {
        min: 0.0,
        max: 4.0,
      }
    },
    fullName: {
      type: Sequelize.VIRTUAL,
      get: function() {
        return this.firstName + " " + this.lastName;
      }
    }
  },{
    defaultScope: {
      include: [{model: Campus}]
    }
  });




  module.exports = Student
