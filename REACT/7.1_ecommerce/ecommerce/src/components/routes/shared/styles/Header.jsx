import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <NavLink to="/">
            <h1 className='header__logo'>E-commerce</h1>
        </NavLink>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header_item' to='/login'>
                    <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/Login'>
                        Login
                    </NavLink>
                </li>

                <li className='header_item' to='/purchase'>
                    <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/purchases'>
                        Purchase
                    </NavLink> 
                </li>

                <li className='header_item' >
                    <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/cart' >Cart</NavLink>
                </li>
            </ul>

        </nav>

    </header>
  )
}

export default Header