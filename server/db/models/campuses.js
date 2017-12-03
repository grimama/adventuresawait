const db = require('../db');
const DataTypes = db.Sequelize;

const Campuses = db.define('playlist', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // imageUrl: {
  //   type: DataTypes.VIRTUAL,
  //   get: function () {
  //     return `/api/albums/${this.id}/image`;
  //   }
  // },
  // description: {

  // }
})


module.exports = {
  Campuses,
  db
};
