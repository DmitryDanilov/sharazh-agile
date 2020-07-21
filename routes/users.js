const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.post('/auth/register', (req, res) => {
    const newUser = new User({ login: req.body.login })

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            res.json({
                success: false, message: "Your account could not be saved.Error: ", err
            })
        } else {
            res.json({
                success: true, message: "Your account has been saved"
            })
        }
    })
})

router.post('/auth/login', async (req, res) => {
    if (!req.body.login) {
        return res.json({ success: false, message: "Login was not given" })
    }

    if (!req.body.password) {
        return res.json({ success: false, message: "Password was not given" })
    }

    try {
        const { user, error } = await User.authenticate()(req.body.login, req.body.password)
        
        if (error) {
            throw new Error(error)
        }

        req.logIn(user, () => res.json({
            success: true, message: "Authentication successfull", user
        }))


    } catch (err) {
        res.json({
            success: false,
            err
        })
    }
})

router.get('/auth/logout', (req, res) => {
    req.logOut()
    res.json({ success: true, message: "logout successfull" })
})

router.get('/auth/checkUser', (req, res) => {
    res.json(req.user)
})

module.exports = router