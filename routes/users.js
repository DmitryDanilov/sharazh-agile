const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

const User = require('../models/User')

router.get('/login', (req, res) => {
    res.send('Login')
})

router.get('/register', (req, res) => {
    res.send('Register')
})

router.post('/register', (req, res) => {
    const { username, password } = req.body

    User.findOne({ username })
        .then(user => {
            if (user) {
                res.send('Пользователь существует')
            }
            else {
                const newUser = new User({
                    username,
                    password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err
                        }
                        newUser.password = hash
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'Пользователь создан')
                                res.send('Пользователь создан')
                            })
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Вышел')
    res.redirect('/users/login')
})

module.exports = router