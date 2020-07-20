import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import Task from '../components/Task'
import '../css/DashboardPage.css'

const DashboardPage = () => {

    const [data, setData] = useState(null)

    const fetched = useCallback(async () => {
        const { data } = await Axios.get('/dashboard', { withCredentials: true })

        setData(data)
    }, [])

    useEffect(() => {
        fetched()
    }, [fetched])

    return (
        <div className='page-dashboard'>
            {

                data && data.map((el, index) => {
                    return <Task key={index} data={el} />
                })
            }
        </div>
    )
}

export default DashboardPage