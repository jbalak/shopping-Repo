const User = require('../models/users/user')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(opt, (payload, done) => {

  User.findOne({ email: payload.email }, (er, user) => {
    if (er) return done(er, false)

    if (user) {
      return done(null, user)
    } else { return done(null, false) }
  })
}))

module.exports = passport