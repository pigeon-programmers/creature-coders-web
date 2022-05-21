const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/pet', require('./pet'))
router.use('/hats', require('./hats'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
