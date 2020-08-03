import React from 'react'
import { useHistory } from 'react-router-dom'
import '../css/Task.css'
import SvgComponent from './SvgComponent'

const Task = ({ data }) => {
    const history = useHistory()
    const clickButton = (e) => {
        if (e.target.name) {
            history.push(`/detail/${e.target.name}`)
        }
    }

    const colors = ['#478ECC',
        '#6FC6B1',
        '#6666AD',
        '#ED3868',
        '#6FC183',
        '#F16622',
        '#75CDDD']

    const rnd = () => {
        let rand = 0 - 0.5 + Math.random() * (colors.length);
        return Math.round(rand)
    }

    const color = data.status === 3 ? '#666667' : colors[rnd()]

    return (
        <div className='task-container'>
            <div className='svg-container'>
                <SvgComponent fill={color} />
            </div>
            <div className='task-leaflet' style={{ backgroundColor: color }}>
                <div className='task-number'>{`#${data.number}`}</div>
                <div className='task-separator'></div>
                <div className='task-title'>{data.title}</div>
                <div className='task-separator'></div>
                <div className='task-date'>{data.date}</div>
                <button
                    className='task-button'
                    name={data.number}
                    onClick={clickButton}
                >
                    открыть
            </button>
            </div>
        </div>
    )
}

export default Task