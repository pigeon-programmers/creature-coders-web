const router = require('express').Router()
const { where } = require('sequelize/types')
const { models: { User, Pet }} = require('../db')
module.exports = router

router.post('/:userId',async (req, res, next) => {
  try{
    const user = await User.findByPk(req.params.userId)
    const pet = await user.setPet({where: {
      name: req.body.name,
      type: req.body.type
    }})
res.send(pet)
  } catch (err) {
    next(err)
  }
})
