const db = require('../db');
const DataTypes = db.Sequelize;

const Students = db.define('album', {

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
      type: DataTypes.DECIMAL(2,1),
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
  });




  module.exports = {
    Students,
    db
  };
