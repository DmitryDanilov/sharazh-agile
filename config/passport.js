const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

module.exports = (passport) => {
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())

    passport.use(new LocalStrategy(User.authenticate()))
}