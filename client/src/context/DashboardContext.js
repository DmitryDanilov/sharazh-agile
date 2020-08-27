import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import Axios from 'axios'

const DashboardContext = createContext()

export const useDashboard = () => {
    return useContext(DashboardContext)
}

export const DashboardProvider = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState('0')

    const [tasks, setTasks] = useState(null)

    const changeSelectedUser = (name) => {
        setSelectedUser(name)
    }

    /*Загрузка списка зареганных юзеров*/

    const loadUsers = useCallback(async () => {
        const { data } = await Axios.get('/api/users/getUsers', { withCredentials: true })

        if (data) {
            setUsers(data)
        }
    }, [])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    /*Загрузка списка задач*/

    const loadTasks = useCallback(async () => {
        const { data } = await Axios.get('/api/task/getTasks', { withCredentials: true })

        setTasks(data)
    }, [])

    useEffect(() => {
        loadTasks()
    }, [loadTasks])

    return (
        <DashboardContext.Provider value={{
            users,
            selectedUser,
            changeSelectedUser,
            tasks,
            loadTasks
        }}>
            {children}
        </DashboardContext.Provider>
    )
}