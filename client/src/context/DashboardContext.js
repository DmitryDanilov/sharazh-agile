import { createContext } from 'react'

export const DashboardContext = createContext({
    users: null,
    selectedUser: null,
    changeSelectedUser: () => { }
})