import React from 'react'
import '../css/Task.css'
import { useHistory } from 'react-router-dom'

const Task = ({ data }) => {
    const history = useHistory()
    const clickButton = (e) => {
        console.log(e.target.name)
        history.push(`/detail/${e.target.name}`)
    }

    return (
        <div className='task-container'>
            <div className='task-number'>{data.number}</div>
            <div className='task-title'>{data.title}</div>
            <div className='task-date'>{data.date}</div>
            <button
                name={data.number}
                onClick={clickButton}
            >
                открыть
            </button>
        </div>
    )
}

export default Task