const Sequelize = require('sequelize');
const db = require('../db');

const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Pidge',
  },
  type: {
    type: Sequelize.ENUM('Pigeon', 'Raccoon', 'Possum', 'Skunk', 'Seagull', 'BodegaCat', 'Squirrel'),
    defaultValue: 'Pigeon',
    allowNull: false,
  },
});

module.exports = Pet;
