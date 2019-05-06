const User = require('../../models/users/user')
const express = require('express')
const router = express.Router()
const genToken = require('../../utils/genToken')

router.get('/', async (req, res) => {
  const { email, password } = req.body

  let user = await User.findOne({ email })
  if (user) {
    return res.send(genToken({ email: user.email }))
  }

})

module.exports = router