const router = require('express').Router()
const { models: { User, Pet, Badge }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'points', 'currentLevel']
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
      include: [{ model: Badge }]
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
