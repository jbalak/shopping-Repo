require('dotenv').config()
const jwt = require('jsonwebtoken')
const payload = {
  email: 'abc@gmail.com'
}
console.log(process.env.JWT_SECRET)
const token = jwt.sign(payload, process.env.JWT_SECRET)
console.log(token)
module.exports = token


