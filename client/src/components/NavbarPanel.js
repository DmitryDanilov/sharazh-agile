import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Background from '../logo.svg'
import '../css/NavbarPanel.css'

export const NavbarPanel = () => {
    const history = useHistory()
    const { logout } = useContext(AuthContext)
    const location = useLocation()

    const logoutHandler = async event => {
        event.preventDefault()
        await logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <img className="logo-img" src={Background} alt="logo"></img>
                <ul id="menu">
                    <li className={location.pathname === '/createTask' ? "nav-link active" : "nav-link"}><Link to="/createTask">Создать</Link></li>
                    <li className={location.pathname === '/account' ? "nav-link active" : "nav-link"}><Link to="/account">Аккаунт</Link></li>
                    <li className={location.pathname === '/dashboard' ? "nav-link active" : "nav-link"}><Link to="/dashboard">Dashboard</Link></li>
                    <li className={location.pathname === '/' ? "nav-link active" : "nav-link"}><Link to="/" onClick={logoutHandler}>Выйти</Link></li>
                </ul>
            </div>
        </nav>
    )
}