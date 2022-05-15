const Sequelize = require('sequelize')
const db = require('../db')

const Map = db.define('map', {
  levels: {
    type: Sequelize.INTEGER,
  },
  games: {
    type: Sequelize.INTEGER
  }
})

module.exports = Map
