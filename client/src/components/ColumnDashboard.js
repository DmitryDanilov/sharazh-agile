import React, { useContext } from 'react'
import '../css/ColumnDashboard.css'
import Task from './Task'
import { DashboardContext } from '../context/DashboardContext'

export const ColumnDashboard = ({ data, status }) => {
    const { selectedUser } = useContext(DashboardContext)

    let filteredTaskByStatus = []
    if (data) {
        filteredTaskByStatus = data.filter(us => us.status === status && (selectedUser === '0' || us.executor === selectedUser))
    }

    const nameStatus = status === 0 ? 'Новая' : status === 1 ? 'В работе' : status === 2 ? 'Решено' : 'Архив'

    return (
        <div className='column'>
            <div style={{ textAlign: 'center' }}>
                <div className='dashboard-column'>
                    {
                        nameStatus + ` (${filteredTaskByStatus.length})`
                    }
                </div>
            </div>
            {
                filteredTaskByStatus && filteredTaskByStatus.map((el, index) => {
                    return <Task key={index} data={el} />
                })
            }
        </div >
    )
}