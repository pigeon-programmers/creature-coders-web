const Sequelize = require('sequelize')
const db = require('../db')

const Badge = db.define('badge', {
    name: {
        type: Sequelize.STRING,
    }
});

module.exports = Badge; 
