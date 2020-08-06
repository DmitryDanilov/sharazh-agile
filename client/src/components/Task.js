import React from 'react'
import { useHistory } from 'react-router-dom'
import '../css/Task.css'
import SvgComponent from './SvgComponent'

const Task = ({ data }) => {
    const history = useHistory()
    const clickButton = (e) => {
        console.log(e.target)
        if (e.target.name) {
            history.push(`/detail/${e.target.name}`)
        }
    }

    const colors = ['#66BFFF',
        '#5798FB',
        '#18B5E7',
        '#A180E9',
        '#EB6F85']

    const rnd = () => {
        let rand = 0 - 0.5 + Math.random() * (colors.length);
        return Math.round(rand)
    }

    const color = data.status === 3 ? '#666667' : colors[rnd()] /*пока рандомно расставляем цвета карточек, планируется красить в зависимости от приоритета*/
    const tasknum = data.number.toString()
    const prefix_zeros = '000000'

    const date_formatted = () => {
      let date_parts =  data.date.split('-');
      return `${date_parts[2].substring(0,2)}.${date_parts[1]}.${date_parts[0]}`
    }

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
                <div className='task-number' >{`#${prefix_zeros.substring(0,6-tasknum.length)}${tasknum}`}</div>
                <div className='task-separator'></div>
                <div className='task-title'>{data.title}</div>
            <div className='task-date'>{date_formatted()}</div>
            </div>
        </div>
    )
}

export default Task