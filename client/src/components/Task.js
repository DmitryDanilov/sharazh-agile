import React from 'react'
import { useHistory } from 'react-router-dom'
import '../css/Task.css'
import SvgComponent from './SvgComponent'
import { dateFormatted, prefixZeros } from '../constants.js'

const Task = ({ data }) => {
    const history = useHistory()
    const clickButton = (e) => {
        console.log(e.target)
        if (e.target.name) {
            history.push(`/detail/${e.target.name}`)
        }
    }

    const colors = ['#48B8AC',
        '#58C7DA',
        '#70B2E2',
        '#AC6BAD',
        '#F16393']

    const color = data.status === 3 ? '#90A4AF' : colors[data.priority - 1] 
    const tasknum = data.number.toString()

    return (
        <div className='task-container'  name={data.number} onClick={clickButton}>
            <div className='svg-container'>
                <SvgComponent fill={color} />
            </div>
            <button
                    className='task-button'
                    name={data.number}
                    onClick={clickButton}
                >
            </button>
            <div className='task-leaflet' style={{ backgroundColor: color }}>
                <div className='task-number' >{`#${prefixZeros.substring(0,6-tasknum.length)}${tasknum}`}</div>
                <div className='task-separator'></div>
                <div className='task-title'>{data.title}</div>
            <div className='task-date'>{dateFormatted(data.date)}</div>
            </div>
        </div>
    )
}

export default Task