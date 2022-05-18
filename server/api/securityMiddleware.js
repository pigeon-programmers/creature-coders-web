const { models: { User }} = require("../db")

const requireToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const user = await User.findByToken(token);
      console.log("inside require token")
      req.user = user;
      next();
    } catch(error) {
      next(error);
    }
  };

module.exports = {
    requireToken
}