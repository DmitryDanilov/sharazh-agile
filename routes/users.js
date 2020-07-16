const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

const User = require('../models/User')

router.get('/auth/login', (req, res) => {
    res.send('Login')
})

router.get('/auth/register', (req, res) => {
    res.send('Register')
})

router.post('/auth/register', (req, res) => {
    /*const { login, password } = req.body

    User.findOne({ login })
        .then(user => {
            if (user) {
                res.send('Пользователь существует')
            }
            else {
                const newUser = new User({
                    login,
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
                                res.send(user)
                            })
                            .catch(err => console.log(err))
                    })
                })
            }
        })*/
    const newUser = new User({ login: req.body.login })

    console.log(newUser)
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log('errrr')
            res.json({
                success: false, message: "Your account could not be saved.Error: ", err
            })
        } else {
            console.log('noooo errrr')
            res.json({
                success: true, message: "Your account has been saved"
            })
        }
    })
})

router.post('/auth/login', (req, res, next) => {
    /*passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/api/auth/login',
        failureFlash: true
    })(req, res, next)*/
    if (!req.body.login) {
        res.json({ success: false, message: "Login was not given" })
    } else {
        if (!req.body.password) {
            res.json({ success: false, message: "Password was not given" })
        } else {
            passport.authenticate('local', function (err, user, info) {
                if (err) {
                    res.json({ success: false, message: err })
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'login or password incorrect' })
                    } else {
                        req.login(user, function (err) {
                            if (err) {
                                res.json({ success: false, message: err })
                            } else {
                                const token = jwt.sign({
                                    userId: user._id,
                                    login: user.login
                                }, secretkey,
                                    { expiresIn: '24h' })
                                res.json({
                                    success: true, message: "Authentication   successfull", token: token
                                });
                            }
                        })
                    }
                }
            })(req, res);
        }
    }
})

router.get('/auth/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Вышел')
    res.redirect('/api/auth/login')
})

module.exports = router