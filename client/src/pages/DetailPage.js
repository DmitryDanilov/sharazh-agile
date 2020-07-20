import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

const DetailPage = () => {
    const [task, setTask] = useState(null)

    const taskNumber = useParams().number

    const fetched = useCallback(async () => {
        const { data } = await Axios.get(`/api/task/getTask/${taskNumber}`, { withCredentials: true })

        setTask(data)
    }, [])

    useEffect(() => {
        fetched()
    }, [fetched])

    return (
        <div>
            <div>Номер {task && task.number}</div>
            <div>Заголовок {task && task.title}</div>
            <div>Описание {task && task.description}</div>
            <div>Дата {task && task.date}</div>
        </div>
    )
}

export default DetailPage