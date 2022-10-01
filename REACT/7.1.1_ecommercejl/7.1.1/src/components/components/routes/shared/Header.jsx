import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <NavLink to='/'>
            <span className='header__logo'>JLBusinnes</span>
        </NavLink>

        <nav className='header__nav'>
                <ul className='header__nav__link'>
                    <li className='nav__link_item'>
                        <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login" >Login</NavLink>
                    </li>
                    <li className='nav__link_item'>
                        <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases" >Purchases</NavLink>
                    </li>
                    <li className='nav__link_item'>
                        <span className='nav__link'>Cart</span>
                    </li>
                </ul>
        </nav>
    </header>
  )
}

export default Header