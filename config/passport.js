const passport = require('passport')
const Admin = require('../models/users/admin')
let JwtStrategy = require('passport-jwt').Strategy
let ExtractJwt = require('passport-jwt').ExtractJwt
let options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY
}
passport.use(
  new JwtStrategy(options, (payload, done) => {
    console.log(options)

    console.log(payload)
    Admin.find({ name: 'bala' }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  })
)
module.exports = passport