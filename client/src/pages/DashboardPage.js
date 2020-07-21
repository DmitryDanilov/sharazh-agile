import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import Task from '../components/Task'
import '../css/DashboardPage.css'
import { ColumnDashboard } from '../components/ColumnDashboard'
import { ToolMenu } from '../components/ToolMenu'

const DashboardPage = () => {

    const [data, setData] = useState(null)

    const fetched = useCallback(async () => {
        const { data } = await Axios.get('/api/task/getTasks', { withCredentials: true })

        setData(data)
    }, [])

    useEffect(() => {
        fetched()
    }, [fetched])

    return (
        <div>
            <div className='page-dashboard'>
                <ColumnDashboard data={data} status={0} />
                <div className='sep'></div>
                <ColumnDashboard data={data} status={1} />
                <div className='sep'></div>
                <ColumnDashboard data={data} status={2} />
                <div className='sep'></div>
                <ColumnDashboard data={data} status={3} />
                <div className='sep'></div>
                <ToolMenu />
            </div>
        </div>
    )
}

export default DashboardPage