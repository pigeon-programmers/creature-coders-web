//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');
const Badge = require('./models/Badge');

User.hasOne(Pet);
Pet.belongsTo(User);

User.belongsToMany(Badge, { through: "User_Badges"});
Badge.belongsToMany(User, { through: "User_Badges"});

module.exports = {
  db,
  models: {
    User,
    Pet,
    Badge,
  },
}
