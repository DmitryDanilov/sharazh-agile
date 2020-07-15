const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send('Welcome')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.send('Dashboard')
})

module.exports = router