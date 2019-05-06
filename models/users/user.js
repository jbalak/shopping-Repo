const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: String,
  email: String,
  passport: String
})

const User = mongoose.model('user', UserSchema, 'user')

module.exports = User