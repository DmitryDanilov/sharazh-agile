import React, { useState } from 'react'
import '../css/Task.css'

const Task = (props) => {

    const { data } = props

    return (
        <div className='task-container'>
            <div className='task-number'>{data.number}</div>
            <div className='task-title'>{data.title}</div>
            <div className='task-date'>{data.date}</div>
        </div>
    )
}

export default Task