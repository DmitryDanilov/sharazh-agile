import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [user, setUser] = useState(null)

    const login = useCallback((userFromServer) => {

        if (userFromServer) {
            setUser(userFromServer)
        }

        localStorage.setItem(storageName, JSON.stringify({
            user: userFromServer
        }))
    }, [])

    const logout = useCallback(() => {
        setUser(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.user) {
            login(data.user)
        }
    }, [login])

    return { login, logout, user }
}