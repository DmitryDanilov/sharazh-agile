const express = require('express');
const router = express.Router();
const api = require('../api.js')

/* Создание пользователя */
router.post('/login', (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/') /*пересмотреть*/
    }

    console.log(req)
    
    api.checkUser(req.body)
        .then((user) => {
            console.log('then')
            if (user) {
                req.session.user = { id: user._id, username: user.username }
                res.redirect('/') /*пересмотреть*/
            } else {
                return next(error)
            }
        })
        .catch((error) => {
            console.log('catch')
            return next(error)
        })

});

router.post('/', (req, res, next) => {
    api.createUser(req.body)
        .then((result) => {
            console.log("User created")
        })
        .catch((err) => {
            if (err.toJSON().code == 11000) {
                res.status(500).send("This email already exist")
            }
        })
});

router.post('/logout', (req, res, next) => {
    if (req.session.user) {
        delete req.session.user;
        res.redirect('/') /*пересмотреть*/
    }
});

module.exports = router;