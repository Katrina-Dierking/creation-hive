import React from 'react'
import { Link } from 'react-router-dom'
import "../../../views/shop/shop.scss"

const ShopNav = () => {
  return (

    <section className="shopnav">
        <Link to="/">home</Link>
        <Link to="/sweetshop">sweet shop</Link>
        <Link to="/tumblers">tumblers</Link>
        <Link to="/vinyls">vinyls</Link>
        <Link to="/pens">pens</Link>
        <Link to="/lovemugs">love mugs</Link>
    </section>
  );
}

export default ShopNav