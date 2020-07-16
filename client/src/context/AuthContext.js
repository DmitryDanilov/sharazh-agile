import { createContext } from 'react'

function loop() { }

export const AuthContext = createContext({
    login: loop,
    logout: loop,
    isAuthenticated: false,
    user: null
})