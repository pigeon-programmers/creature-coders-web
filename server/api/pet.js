const router = require('express').Router();
const {
  models: { User, Pet },
} = require('../db');
module.exports = router;

router.get('/:userId', async (req, res, next) => {
  try {
    const userPet = await Pet.findOne({ where: {
      userId: req.params.userId
    }})
    res.json(userPet);
  } catch (err) {
    next(err);
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    console.log('wreck that body: ', req.body);
    const user = await User.findByPk(req.params.userId);
    const pet = await user.createPet({
      name: req.body.name,
      type: req.body.type,
    });
    res.send(pet);
  } catch (err) {
    next(err);
  }
});
