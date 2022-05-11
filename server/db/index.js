//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');

User.belongsTo(Pet);
Pet.hasMany(User);

module.exports = {
  db,
  models: {
    User,
    Pet,
  },
}
