const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middleware/auth')
const Task = require('../models/Task')

router.post('/task/createTask', ensureAuthenticated, async (req, res) => {
    console.log(req.body)

    const { title, description } = req.body
    if (title && description) {
        const isTasks = await Task.find()
        if (isTasks.length > 0) {
            console.log('true')
            lastTask = await Task.find().pop()

            console.log('lastTask', lastTask)

            const task = new Task(
                {
                    number: lastTask.number + 1,
                    title: title,
                    description: description,
                    date: new Date(),
                    status: 'new'
                })

            task.save()
        }
        else {
            console.log('false')
            const task = new Task(
                {
                    number: 1,
                    title: title,
                    description: description,
                    date: new Date(),
                    status: 'new'
                })
            task.save()
        }
        return res.send({ msg: 'задача создана' })
    }
    return res.send({ status: 'success', msg: 'нет имени или описания' })
})

module.exports = router