import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'

const Nav = () => {
  return (
    <section className="nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to='/shop'>SHOP</Link>
      <Link to='/videos'>VIDEOS</Link>
      <Link to='/contact'>CONTACT</Link>
    </section>
  );
}

export default Nav