import React, { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css';

const NavBar: FC = () => {
  return (
    <div>
        <header className='navigation-header'>
            <nav className='nav-bar-container'>
                <h1 className='navigation-bar'>RTS Todo App</h1>
                <span className='navlink'>
                    <Link to='/'>Home</Link>
                    <span className='navlink'>
                    <Link to='/completed'>Completed</Link>
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

export default NavBar