const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
    name: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.ENUM("Pigeon", "Possom", "Skunk", "Rat", "Racoon"),
        defaultValue: "Pigeon",
        allowNull: false,
    }
});

module.exports= Pet;
