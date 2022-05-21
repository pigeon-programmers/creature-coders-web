const router = require('express').Router();
const {
  models: { User, Hat },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const hats = await Hat.findAll()
    res.send(hats);
  } catch (err) {
    next(err);
  }
})
