const mongoose = require('mongoose')
const User = require('../../models/users/user')
const express = require('express')
const router = express.Router()


router.post('/', async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ name })
  if (user) {
    return res.status(400).send(`${name} already present`)

  }
  else {
    const newUser = await new User({
      name, email, password
    })

    await newUser.save()
    return res.send(`${name} signed up successfully`)

  }




})

module.exports = router