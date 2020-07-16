import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavbarPanel = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div>
            <Link to="/account" className="nav-link">Аккаунт</Link>
            <Link to="/chat" className="nav-link">Чат</Link>
            <Link to="/" className="nav-link" onClick={logoutHandler}>Выйти</Link>
        </div>
    )
}