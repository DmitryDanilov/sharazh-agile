const { Schema, model } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

User.plugin(passportLocalMongoose)

module.exports = model('User', User)