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

router.put('/:userId/streak', async (req, res, next) => {
  try {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    //put the year month and day together and change it to a number
    const today = +`${year}${month}${day}`;
    //get the user by userId
    const userId = req.params.userId;
    let user = await User.findByPk(userId);
    // console.log('🐠USER', user);
    // console.log('🦁OLD LAST DATE PLAYED', user.lastDatePlayed);
    // console.log('🐷OLD STREAK', user.streak);
    // console.log('🦆TODAY', today);

    const newLogIn = req.body.logIn;
    //if they are logging in and it is not adding to a streak, reset to 0
    if (newLogIn && today !== user.lastDatePlayed + 1)
      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: 0,
        })
      );

    // if user last played yesterday, update date and add 1 to streak
    if (today === user.lastDatePlayed + 1) {
      const newStreak = user.streak++;
      console.log('🦀 USER SIGNING IN NEXT DAY');
      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: newStreak,
        })
      );
    } else if (today === user.lastDatePlayed) {
      //if the last time they played was today, do nothing
      console.log('🐥 USER SIGNING IN SAME DAY');
      res.send(user);
    } else {
      //else update date and change streak to 1
      //this will take care of streak being 0
      console.log('🐍 USER NOT IN OR BREAKING STREAK');
      res.send(
        await user.update({
          lastDatePlayed: today,
          streak: 1,
        })
      );
    }
  } catch (err) {
    console.error('🥶Cannot update user streak...');
    next(err);
  }
});
