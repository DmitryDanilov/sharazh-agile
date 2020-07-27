import React, { useContext } from 'react'
import { UsersList } from './UsersList'
import { DashboardContext } from '../context/DashboardContext'

export const OptionsMenu = () => {
    const { users, selectedUser, changeSelectedUser } = useContext(DashboardContext)

    const changeSelected = (event) => {
        changeSelectedUser(event.target.value)
    }
    
    return (
        <UsersList users={users} selectedUser={selectedUser} changeSelectedUser={changeSelected} />
    )
}