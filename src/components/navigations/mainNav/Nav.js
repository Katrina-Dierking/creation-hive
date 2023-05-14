import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to='/shop'>SHOP</Link>
      <Link to='/videos'>TUTORIALS</Link>
      <Link to='/contact'>CONTACT</Link>
    </nav>
  );
}

export default Nav