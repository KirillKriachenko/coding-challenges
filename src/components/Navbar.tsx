import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <a href='/home'>Home</a>
            <ul>
                <li className='active'><a href='/chalanges'>Chalanges</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contacts'>Contacts</a></li>
            </ul>

            <div className=''></div>
        </nav>
    )
}

export default Navbar