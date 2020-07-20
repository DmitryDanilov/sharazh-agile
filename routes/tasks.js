const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middleware/auth')
const Task = require('../models/Task')

router.post('/task/createTask', ensureAuthenticated, async (req, res) => {
    console.log(req.body)

    const { title, description } = req.body
    if (title && description) {
        const isTasks = await Task.find()

        let lastNumber = null
        if (isTasks.length > 0) {
            const lastTask = await Task.find()
            lastNumber = lastTask[lastTask.length - 1].number
        }

        const task = new Task(
            {
                number: lastNumber ? lastNumber + 1 : 1,
                title,
                description,
                date: new Date(),
                status: 'new'
            })

        await task.save()

        return res.send({ status: 'success', msg: 'задача создана' })
    }
    return res.send({ status: 'failed', msg: 'нет имени или описания' })
})

router.get('/task/getTasks', ensureAuthenticated, async (req, res) => {
    const tasks = await Task.find()

    res.send(tasks)
})

router.get('/task/getTask/:number', ensureAuthenticated, async (req, res) => {
    const task = await Task.findOne({ number: req.params.number })
    console.log(task)
    res.json(task)
})

module.exports = router