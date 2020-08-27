import React from 'react'
import Axios from 'axios'
import { DRAGGABLE_ELEMENT, DROPPABLE_AREA } from '../../constants'
import { useDashboard } from '../../context/DashboardContext'

export const Droppable = ({ children, id, style }) => {
    const { loadTasks } = useDashboard()

    const drop = async (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('transfer')
        console.log(`бросил ${data} в ${e.target.id}`)
        const taskNumber = data.slice(DRAGGABLE_ELEMENT.length)
        const newStatus = e.target.id.slice(DROPPABLE_AREA.length)
        await Axios.post('/api/task/changeStatus/', { taskNumber, newStatus }, { withCredentials: true })
        loadTasks()
    }

    const allowDrop = (e) => {
        e.preventDefault()

        console.log('держу в норм месте', e.target.id)
    }

    return (
        <div id={id} onDrop={drop} onDragOver={allowDrop} style={style} className='column'>
            {children}
        </div>
    )
}