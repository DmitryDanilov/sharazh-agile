import React from 'react'
import Axios from 'axios'

export const Droppable = ({ children, id, style }) => {
    const drop = async (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('transfer')
        e.target.appendChild(document.getElementById(data))
        console.log(`бросил ${data} в ${e.target.id}`)
        const taskNumber = data.slice(4)
        const newStatus = e.target.id.slice(2)
        await Axios.post('/api/task/changeStatus/', { taskNumber, newStatus }, { withCredentials: true })
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