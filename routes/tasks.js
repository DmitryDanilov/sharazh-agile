const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middleware/auth')
const Task = require('../models/Task')

router.post('/task/createTask', ensureAuthenticated, async (req, res) => {
    console.log(req.user)
    const { title, description, executor } = req.body

    console.log(executor)
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
                status: 0,
                author: req.user.login,
                executor: executor
            })

        await task.save()

        return res.json({ status: 'success', msg: 'задача создана' })
    }
    return res.json({ status: 'failed', msg: 'нет имени или описания' })
})

router.get('/task/getTasks', ensureAuthenticated, async (req, res) => {
    const tasks = await Task.find()

    res.json(tasks)
})

router.get('/task/getTask/:number', ensureAuthenticated, async (req, res) => {
    const task = await Task.findOne({ number: req.params.number })
    res.json(task)
})

router.post('/task/changeStatus', ensureAuthenticated, async (req, res) => {

    const { taskNumber: number, newStatus } = req.body

    const task = await Task.findOne({ number })

    if (task) {
        if (newStatus) {
            await Task.updateOne(
                { number },
                { status: newStatus }
            )

            return res.json({ status: 'success', msg: 'задача обновлена' })
        }
        else {
            const prevStatus = task.status

            if (prevStatus < 3) {
                await Task.updateOne(
                    { number },
                    { status: prevStatus + 1 }
                )

                return res.json({ status: 'success', msg: 'задача обновлена' })
            }
        }
    }
    return res.json({ status: 'failed', msg: 'что то не то' })
})

module.exports = router