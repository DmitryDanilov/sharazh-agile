import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const AuthContext = createContext({
    login: null,
    logout: null,
    isAuthenticated: false,
    user: null
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const checkUser = async () => {
        const { data } = await Axios.get('/api/auth/checkUser', { withCredentials: true })

        setUser(data)
    }

    useEffect(() => {
        checkUser()
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return null
    }

    const login = async (authForm) => {
        try {
            const { data } = await Axios.post('/api/auth/login', authForm)
            setUser(data.user)
        }
        catch (err) {
            console.log('Ошибка авторизации', err)
        }
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