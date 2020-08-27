import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

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

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div>
            <div>Номер {task && task.number}</div>
            <div>Заголовок {task && task.title}</div>
            <div>Описание {task && task.description}</div>
            <div>Дата {task && task.date}</div>
            <div>Автор {task && task.author}</div>
            <div>Назначена {task && task.executor}</div>
            <div>Приоритет {task && task.priority}</div>
            <button
                onClick={changeStatus}
            >{task ? (task.status === 0 ? 'взять в работку' : task.status === 1 ? 'сделяль' : task.status === 2 ? 'в архив' : 'уже в архиве, куда') : 'empty'}</button>
        </div>
    )
}

export default DetailPage