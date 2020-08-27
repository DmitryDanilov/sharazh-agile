const { Schema, model } = require('mongoose')

const Task = new Schema({
    number: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: Number, required: true },
    author: { type: String, required: true },
    executor: { type: String, required: true },
    priority: { type: Number, required: true}
})

module.exports = model('Task', Task)