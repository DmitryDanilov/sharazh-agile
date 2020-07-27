import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ToolMenu.css'

export const ToolMenu = () => {
    return (
        <div className='menu-container'>
            <div><Link to="https://google.com" className="menu-link">Какая-то ссыль #1</Link></div>
            <div><Link to="https://google.com" className="menu-link">Какая-то ссыль #2</Link></div>
            <div><Link to="https://google.com" className="menu-link">Какая-то ссыль #3</Link></div>
            <div><Link to="https://google.com" className="menu-link">Какая-то ссыль #4</Link></div>
            <div><Link to="https://google.com" className="menu-link">Какая-то ссыль #5</Link></div>
        </div>
    )
}