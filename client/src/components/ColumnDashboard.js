import React, { useContext } from 'react'
import '../css/ColumnDashboard.css'
import Task from './Task'
import { DashboardContext } from '../context/DashboardContext'
import { Draggable } from './dnd/Draggable'
import { Droppable } from './dnd/Droppable'

export const ColumnDashboard = ({ data, status }) => {
    const { selectedUser } = useContext(DashboardContext)

    let filteredTaskByStatus = []
    if (data) {
        filteredTaskByStatus = data.filter(us => us.status === status && (selectedUser === '0' || us.executor === selectedUser))
    }

    const nameStatus = status === 0 ? 'Новая' : status === 1 ? 'В работе' : status === 2 ? 'Решено' : 'Архив'

    return (
        <Droppable id={'dr' + status}>
            <div style={{ textAlign: 'center' }}>
                <div className='dashboard-column'>
                    {
                        nameStatus + ` (${filteredTaskByStatus.length})`
                    }
                </div>
            </div>
            {
                filteredTaskByStatus && filteredTaskByStatus.map((el, index) => {
                    return (
                        <Draggable key={index} id={'drag' + el.number}>
                            <Task key={index} data={el} />
                        </Draggable>
                    )
                })
            }
        </Droppable>
    )
}