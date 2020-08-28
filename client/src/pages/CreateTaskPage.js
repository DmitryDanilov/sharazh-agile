import React, { useState, useCallback, useEffect } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { UsersList } from '../components/UsersList'
import RadioButtons from '../components/RadioButtons'
import '../css/CreateTaskPage.css'


const CreateTaskPage = () => {
    const [taskForm, setTaskForm] = useState({ title: '', description: '' })
    const [stasus, setStatus] = useState('non')
    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [priority, setPriority] = useState('3')

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
        const { data } = await Axios.post('/api/task/createTask', { ...taskForm, executor: selectedUser, priority }, { withCredentials: true })

        setStatus(data.status)
    }

    const changeSelected = (event) => {
        setSelectedUser(event.target.value)
    }

    const changeHandlerPriority = (e) => {
        setPriority(e.target.value)
    }

    if (stasus === 'success') {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className='create-task-container'>
            <div className='page-top-area'>
                <div className='page-main-title'>
                    <span className="main-title-text">Создание</span>&nbsp; <span className="main-title-text text-colored">задачи</span>&nbsp;
                </div>
            </div>
            <div className = 'page-input-area'>
            <div className = 'input-taskname inline'>
            <input
                className ='task-name inline'
                name="title"
                placeholder='Введите заголовок задачи'
                value={taskForm.title}
                onChange={changeHandler}
            ></input>
            </div>
            <div className = 'input-performer inline'>
                 <label className='label-input inline'>Исполнитель: </label><UsersList users={users} selectedUser={selectedUser} changeSelectedUser={changeSelected} />
            </div>
            <div className = 'input-priority-control inline'>
                 <label className='label-input inline'> Установите приоритет: </label><RadioButtons priority={priority} changeHandlerPriority={changeHandlerPriority} />
            </div>
            <div className = 'input-textarea'>
            <textarea
                className = 'task-area'
                rows="15"
                cols="200"
                name="description"
                maxLength="1000"
                placeholder='Текст задачи'
                value={taskForm.description}
                onChange={changeHandler}
            ></textarea>
            </div>
            <div className='custom-button clickable-button'>
                <button 
                    name='send'
                    onClick={pressAccess}
                >Создать</button>
            </div>    
            </div>
            <div className = 'footer-task-container'>
            </div>
        </div>
    )
}

export default CreateTaskPage