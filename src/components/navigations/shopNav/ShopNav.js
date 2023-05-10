import React from 'react'
import { Link } from 'react-router-dom'
import "./shopNav.scss"

const ShopNav = () => {
  return (
    <section className="shopnav">
        <Link to="/">HOME</Link>
        <Link to="/sweetshop">SWEET SHOP</Link>
        <Link to="/tumblers">TUMBLERS</Link>
        <Link to="/vinyls">VINYLS</Link>
        <Link to="/pens">PENS</Link>
        <Link to="/lovemugs">LOVE MUGS</Link>
    </section>
  );
}

export default ShopNav