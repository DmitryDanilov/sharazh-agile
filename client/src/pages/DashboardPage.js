import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import { ColumnDashboard } from '../components/ColumnDashboard'
import { ToolMenu } from '../components/ToolMenu'
import { OptionsMenu } from '../components/OptionsMenu'
import { DashboardContext } from '../context/DashboardContext'
import '../css/DashboardPage.css'

const DashboardPage = () => {

    const [data, setData] = useState(null)
    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState('0')

    /*Загрузка списка задач*/

    const loadTasks = useCallback(async () => {
        const { data } = await Axios.get('/api/task/getTasks', { withCredentials: true })

        setData(data)
    }, [])

    useEffect(() => {
        loadTasks()
    }, [loadTasks])

    /*Загрузка списка зареганных юзеров*/

    const loadUsers = useCallback(async () => {
        const { data } = await Axios.get('/api/users/getUsers', { withCredentials: true })

        if (data) {
            setUsers(data)
            //setSelectedUser(0)
        }
    }, [])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])


    const changeSelectedUser = (name) => {
        setSelectedUser(name)
    }

    return (
        <DashboardContext.Provider value={{ users, selectedUser, changeSelectedUser }}>
            <div className='options-menu'>
                <OptionsMenu />
            </div>
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
        </DashboardContext.Provider>
    )
}

export default DashboardPage