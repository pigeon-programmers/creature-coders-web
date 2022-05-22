const router = require('express').Router();
const {
  models: { User, Pet, Hat },
} = require('../db');
const { requireToken } = require('./securityMiddleware');
const dayjs = require('dayjs');
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

router.put('/:userId/streak', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    let user = await User.findByPk(userId);

    const lastPlayed = dayjs(user.lastDatePlayed);
    const today = dayjs();
    const yesterday = dayjs().subtract(1, 'day');

    const newLogIn = req.body.logIn;

    //if they are logging in and last played before yesterday, reset streak to 0
    if (
      newLogIn &&
      !lastPlayed.isSame(yesterday, 'day', 'month', 'year') &&
      !lastPlayed.isSame(today, 'day', 'month', 'year')
    ) {
      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: 0,
        })
      );
    }

    //if the streak is 0, this game updates last played to today and makes streak 1
    if (!newLogIn && user.streak === 0) {
      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: 1,
        })
      );
    }

    //if user last played yesterday, don't change anything
    if (!newLogIn && lastPlayed.isSame(today, 'day', 'month', 'year')) {
      res.send(user);
    }

    //if user last played yesterday, then add one to streak and change last played date
    if (!newLogIn && lastPlayed.isSame(yesterday, 'day', 'month', 'year')) {
      let newStreak = user.streak;

      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: ++newStreak,
        })
      );
    }
  } catch (err) {
    console.error('🥶Cannot update user streak...');
    next(err);
  }
});
