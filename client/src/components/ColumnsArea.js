import React from 'react'
import { ColumnDashboard } from '../components/ColumnDashboard'
import { useDashboard } from '../context/DashboardContext'

export const ColumnsArea = () => {
    const { tasks } = useDashboard()

    return (
        <>
            <ColumnDashboard data={tasks} status={0} />
            <div className='board-separator'></div>
            <ColumnDashboard data={tasks} status={1} />
            <div className='board-separator'></div>
            <ColumnDashboard data={tasks} status={2} />
            <div className='board-separator'></div>
            <ColumnDashboard data={tasks} status={3} />
            <div className='board-separator'></div>
        </>
    )
}