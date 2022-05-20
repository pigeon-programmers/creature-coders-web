const router = require('express').Router()
const { models: { User, Pet, Hat }} = require('../db')
module.exports = router

router.get('/leaderboard', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'points', 'currentLevel'],
      order: [['points', 'DESC']],
      limit: 5,
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'username', 'email', 'currentLevel', 'currentGame', 'points', 'streak', 'pidgeCoin'],
      include: [{ model: Hat }]
    });
    res.send(user)
  } catch (err) {
    next(err)
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const { points, currentLevel, currentGame, pidgeCoin, streak } = req.body;
    res.send(await user.update({ points, currentLevel, currentGame, pidgeCoin, streak }));
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/hats', async (req, res, next) => {
  try {
    const hat = req.body;
    const new PidgeCoins = user.pidgeCoin - hat.cost
    const user = await User.findByPk(req.params.userId);
    user.addHat(hat.id)
    res.send(await user.update({ points, currentLevel, currentGame, pidgeCoin, streak }));
  } catch (err) {
    next(err)
  }
})
