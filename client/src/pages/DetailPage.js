import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { dateFormatted, prefixZeros } from '../constants.js'
import '../css/DetailPage.css'

const DetailPage = () => {
    const [task, setTask] = useState(null)

    const { number: taskNumber } = useParams()

    const loadData = useCallback(async () => {
        if (taskNumber) {
            const { data } = await Axios.get(`/api/task/getTask/${taskNumber}`, { withCredentials: true })
            setTask(data)
        }
    }, [taskNumber])

    const changeStatus = async () => {
        await Axios.post('/api/task/changeStatus/', { taskNumber }, { withCredentials: true })
        loadData()
    }

    const tasknum = taskNumber.toString()

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div className = 'detail-task-container'>
            <div className='page-top-area'>
                <div className='page-main-title'><span className="main-title-text">Задача &nbsp;</span><span className="main-title-text text-colored">{`#${prefixZeros.substring(0,6-tasknum.length)}${tasknum}`}</span></div>
                <div className='page-sub-title text-gray'>«{task && task.title}»</div>
            </div>
            <div className='detail-grid-info'>
                <div className='text-gray'>Автор</div><div className='text-colored'>{task && task.author}</div>
                <div className='text-gray'>Приоритет</div><div className='text-colored'>{task ? (task.priority === 1 ? 'Низкий' : task.priority === 2 ? 'Нормальный' : task.priority === 3 ? 'Средний' :  task.priority === 4 ? 'Высокий' : 'Критический'): 'Не установлен'}</div>
                <div className='text-gray'>Статус</div><div className='text-colored'>{task ? (task.status === 0 ? 'Создана' : task.status === 1 ? 'В работе' : task.status === 2 ? 'Решена' : 'Архивная') : 'empty'}</div>
                <div className='text-gray'>Дата создания</div><div className='text-colored'>{task && dateFormatted(task.date)}</div>
                <div className='text-gray'>Описание</div><div>{task && task.description}</div>
            </div>
            <div className = 'footer-task-container'>
            </div>
            <div className='clickable-button custom-button'>
                    <button
                        onClick={changeStatus}
                    >{task ? (task.status === 0 ? 'В работу' : task.status === 1 ? 'Решена' : task.status === 2 ? 'Закрыть' : 'Дальше некуда') : 'empty'}</button>
            </div>
        </div>
    )
}

export default DetailPage