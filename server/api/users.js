const router = require('express').Router();
const {
  models: { User, Pet, Hat },
} = require('../db');
const { requireToken } = require('./securityMiddleware');
module.exports = router;

router.get('/leaderboard', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'points', 'currentLevel'],
      order: [['points', 'DESC']],
      limit: 5,
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: [
        'id',
        'username',
        'email',
        'currentLevel',
        'currentGame',
        'points',
        'streak',
        'pidgeCoin',
      ],
      include: [{ model: Hat }],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:userId', requireToken, async (req, res, next) => {
  try {
    if (+req.params.userId === req.user.id) {
      const user = await User.findByPk(req.params.userId, {
        include: [{ model: Hat }],
      });
      const { points, currentLevel, currentGame, pidgeCoin, streak } = req.body;
      res.send(
        await user.update({
          points,
          currentLevel,
          currentGame,
          pidgeCoin,
          streak,
        })
      );
    } else {
      const error = Error('Forbidden');
      error.status = 403;
      throw error;
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:userId/hats', async (req, res, next) => {
  try {
    const hat = req.body;
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    const newPidgeCoin = user.pidgeCoin - hat.cost;
    //break out if user doesn't have enough PC
    if (newPidgeCoin < 0) return res.send('Not enough PidgeCoins!');
    //add hat to user
    await user.addHat(hat.id);
    await user.update({
      pidgeCoin: newPidgeCoin,
    });
    res.send(
      await User.findByPk(userId, {
        include: [{ model: Hat }],
      })
    );
  } catch (err) {
    next(err);
  }
});
