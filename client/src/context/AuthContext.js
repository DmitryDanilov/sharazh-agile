import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

//function loop() { }

export const AuthContext = createContext({
    login: null,
    logout: null,
    isAuthenticated: false,
    user: null
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const check = async () => {
        const { data } = await Axios.get('/auth', { withCredentials: true })

        setUser(data)
    }

    useEffect(() => {
        check()
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return null
    }

    const login = async (data) => {
        const user = await await Axios.post('/api/auth/login', data)
        setUser(user)
    }

    const logout = async () => {
        await Axios.get('/api/auth/logout', { withCredentials: true })
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}