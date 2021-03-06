const { Schema, model } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
    login: { type: String, required: true, unique: true },
    about: { type: String }
})

User.plugin(passportLocalMongoose, { usernameField: 'login' })

module.exports = model('User', User)