import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from '../styles/layout.module.css'

function Layout() {
    return (
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/home">About</Link>
                <Link to="/home">Services</Link>
                <Link to="/home">Contact</Link>
            </nav>
            <Outlet />
        </>

    )
}

export default Layout