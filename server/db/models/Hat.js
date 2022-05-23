const Sequelize = require('sequelize')
const db = require('../db')

const Hat = db.define('hat', {
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    cost: Sequelize.INTEGER,

});

module.exports = Hat;
