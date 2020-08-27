import React from 'react'
import { UsersList } from './UsersList'
import { useDashboard } from '../context/DashboardContext'

export const OptionsMenu = () => {
    const { users, selectedUser, changeSelectedUser } = useDashboard()

    const changeSelected = (event) => {
        changeSelectedUser(event.target.value)
    }
    
    return (
        <UsersList users={users} selectedUser={selectedUser} changeSelectedUser={changeSelected} />
    )
}