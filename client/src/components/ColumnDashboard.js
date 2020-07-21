import React from 'react'
import '../css/ColumnDashboard.css'
import Task from './Task'

export const ColumnDashboard = ({ data, status }) => {

    let arr = []
    if (data) {
        arr = data.filter(us => us.status === status)
    }

    return (
        <div className='column'>
            <div style={{ textAlign: 'center' }}>
                <div className='dashboard-column'>
                    {
                        (status === 0 ? 'Новая' : status === 1 ? 'В работе' : status === 2 ? 'Решено' : 'Архив') + ` (${arr.length})`
                    }
                </div>
            </div>
            {
                arr && arr.map((el, index) => {
                    return <Task key={index} data={el} />
                })
            }
        </div >
    )
}