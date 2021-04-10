import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from '../../routes'
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav>
            <NavLink exact className='NavLink home' activeClassName='NavLink--active' to={routes.home}>Home</NavLink>
            <NavLink className='NavLink' activeClassName='NavLink--active' to={routes.movies}>Movies</NavLink>
        </nav>
    )
}
export default Navigation;