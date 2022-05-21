const router = require('express').Router();
const {
  models: { User, Pet, Badge },
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
      include: [{ model: Badge }],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:userId', requireToken, async (req, res, next) => {
  try {
    if (+req.params.userId === req.user.id) {
      const user = await User.findByPk(req.params.userId);
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

// router.put('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(await user.update(req.body));
//     res.status(202);
//   } catch (err) {
//     next(err)
//   }
// })
