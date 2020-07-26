import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {NavbarStyled} from './NavbarStyles'
import {DataContext} from '../../contexts/DataContext'

const Navbar = () => {
  const {dataContext} = useContext(DataContext)
  const totalCart = dataContext ? dataContext.carts.length : 0

  return (
    <NavbarStyled>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/cart">Cart <span>{totalCart}</span></NavLink></li>
        <li><NavLink to="/auth">Sign In / Register</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </NavbarStyled>
  )
}

export default Navbar