import React, { useState } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'


const CreateTaskPage = () => {
    const [taskForm, setTaskForm] = useState({ title: '', description: '' })

    const changeHandler = (e) => {
        setTaskForm({ ...taskForm, [e.target.name]: e.target.value })
    }

    const pressAccess = async () => {
        console.log('taskForm', taskForm)
        const { data } = await Axios.post('/api/task/createTask', taskForm, { withCredentials: true })
        if (data.status === 'success') {
            return <Redirect to='/dashboard' />
        }
    }

    return (
        <div className='create-task-container'>
            <input
                name="title"
                placeholder='Введите заголовок задачи'
                value={taskForm.title}
                onChange={changeHandler}
            ></input>
            <textarea
                rows="15"
                cols="200"
                name="description"
                maxLength="1000"
                placeholder='Введите текст задачи'
                value={taskForm.description}
                onChange={changeHandler}
            ></textarea>
            <button
                name='send'
                onClick={pressAccess}
            >Создать</button>
        </div>
    )
}

export default CreateTaskPage