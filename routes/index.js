const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send('Welcome')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    const testArr = []
    for (let i=0; i< 10; i++) {
        testArr[i] = {number: i+1, title: `Задача ${i+1}`, date: new Date()}
    }
    

    res.send(testArr)
})

module.exports = router