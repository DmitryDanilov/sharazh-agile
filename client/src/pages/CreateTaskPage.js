import React, { useState, useCallback, useEffect } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { UsersList } from '../components/UsersList'


const CreateTaskPage = () => {
    const [taskForm, setTaskForm] = useState({ title: '', description: '' })
    const [stasus, setStatus] = useState('non')
    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

    /*Загрузка списка зареганных юзеров*/

    const loadUsers = useCallback(async () => {
        const { data } = await Axios.get('/api/users/getUsers', { withCredentials: true })

        if (data) {
            setUsers(data)
            setSelectedUser(data[0])
        }
    }, [])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    const changeHandler = (e) => {

        console.log(selectedUser)
        setTaskForm({ ...taskForm, [e.target.name]: e.target.value })
    }

    const pressAccess = async () => {
        const { data } = await Axios.post('/api/task/createTask', { ...taskForm, executor: selectedUser }, { withCredentials: true })

        setStatus(data.status)
    }

    const changeSelected = (event) => {
        setSelectedUser(event.target.value)
    }

    if (stasus === 'success') {
        return <Redirect to='/dashboard' />
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
            <UsersList users={users} selectedUser={selectedUser} changeSelectedUser={changeSelected} />
            <button
                name='send'
                onClick={pressAccess}
            >Создать</button>
        </div>
    )
}

export default CreateTaskPage