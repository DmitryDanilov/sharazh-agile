const config = require('config')
const mongoose = require('mongoose')
const crypto = require('crypto')
//const db = mongoose.connect(config.get('mongoUri'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const User = require('./models/User')

const hash = (text) => {
    return crypto
                .createHash('sha1')
                .update(text)
                .digest('base64')
}

exports.creacteUser = (userData) => {
    const user = {
        username: userData.username,
        password: crypto.Hash(userData.password)
    }
    return new User(user).save()
}

exports.getUser = (id) => {
    return User.findOne(id)
}

exports.checkUser = (userData) => {
    console.log('userData', userData)
    return User
        .findOne({ username: userData.username })
        .then((doc) => {
            
            if (doc.password == hash(userData.password)) {
                console.log("User password is ok");
                return Promise.resolve(doc)
            } else {
                return Promise.reject("Error wrong")
            }
        })
}