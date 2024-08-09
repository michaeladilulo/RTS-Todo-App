import React, { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './RootLayout.css';

const RootLayout: FC = () => {
  return (
    <div>
        <header className='navigation-header'>
            <nav className='nav-bar-container'>
                <h1 className='navigation-bar'>RTS Todo App</h1>
                <span className='navlink'>
                    <NavLink to="/">Home</NavLink>
                    <span className='navlink'>
                    <NavLink to="completed">Completed</NavLink>
                    </span>
                </span>
            </nav>
        </header>

        <main>
            <Outlet />    
        </main>    
    </div>

  )
}

export default RootLayout