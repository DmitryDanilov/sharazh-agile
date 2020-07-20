import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import Task from '../components/Task'
import '../css/DashboardPage.css'

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
        <div className='page-dashboard'>
            <div className='column'>
                {
                    data && data.map((el, index) => {
                        if (el.status === 'new') {
                            return <Task key={index} data={el} />
                        }
                    })
                }
            </div>
            <div className='column'>
                {
                    data && data.map((el, index) => {
                        if (el.status === 'work') {
                            return <Task key={index} data={el} />
                        }
                    })
                }
            </div>
            <div className='column'>
                {
                    data && data.map((el, index) => {
                        if (el.status === 'complete') {
                            return <Task key={index} data={el} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default DashboardPage