import React from 'react'
import '../css/ColumnDashboard.css'
import Task from './Task'
import { useDashboard } from '../context/DashboardContext'
import { Draggable } from './dnd/Draggable'
import { Droppable } from './dnd/Droppable'
import { DRAGGABLE_ELEMENT, DROPPABLE_AREA } from '../constants'

export const ColumnDashboard = ({ data, status }) => {
    const { selectedUser } = useDashboard()

    let filteredTaskByStatus = []
    if (data) {
        filteredTaskByStatus = data.filter(us => us.status === status && (selectedUser === '0' || us.executor === selectedUser)).sort((el1, el2) => {
            if (el1.priority < el2.priority) {
                return 1
            }
            else if (el1.priority > el2.priority) {
                return -1
            }
            else {
                return 0
            }
        })
    }

    const nameStatus = status === 0 ? 'Новая' : status === 1 ? 'В работе' : status === 2 ? 'Решено' : 'Архив'

    return (
        <Droppable id={DROPPABLE_AREA + status}>
            <div style={{ textAlign: 'center' }}>
                <div className='dashboard-column'>
                    <span className='title-column'>
                        {
                            nameStatus
                        }
                    </span>&nbsp;&nbsp;
                    <span className='title-column text-colored'>
                        {
                            filteredTaskByStatus.length
                        }
                    </span>
                </div>
            </div>
            {
                filteredTaskByStatus && filteredTaskByStatus.map((el, index) => {
                    return (
                        <Draggable key={index} id={DRAGGABLE_ELEMENT + el.number}>
                            <Task key={index} data={el} />
                        </Draggable>
                    )
                })
            }
        </Droppable>
    )
}