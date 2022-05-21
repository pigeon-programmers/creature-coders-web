//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');
const Hat = require('./models/Hat');

User.hasOne(Pet);
Pet.belongsTo(User);

Pet.belongsTo(Hat);
Hat.hasMany(Pet)

User.belongsToMany(Hat, { through: "User_Hats"});
Hat.belongsToMany(User, { through: "User_Hats"});

module.exports = {
  db,
  models: {
    User,
    Pet,
    Hat,
  },
}
