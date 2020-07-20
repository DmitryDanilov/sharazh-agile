import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Background from '../logo.svg'
import '../css/NavbarPanel.css'

export const NavbarPanel = () => {
    const history = useHistory()
    const { logout } = useContext(AuthContext)

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
                    <li><Link to="/createTask" className="nav-link">Создать</Link></li>
                    <li><Link to="/account" className="nav-link">Аккаунт</Link></li>
                    <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                    <li><Link to="/" className="nav-link" onClick={logoutHandler}>Выйти</Link></li>
                </ul>
            </div>
        </nav>
    )
}