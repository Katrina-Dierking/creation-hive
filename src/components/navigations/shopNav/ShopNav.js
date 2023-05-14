import React from 'react'
import { Link } from 'react-router-dom'
import '../../../views/shop/shopViews/shop.scss'

const ShopNav = () => {
  return (
    <section className="shopnav">
      <div className="shopLeft">
        <Link to="/">home</Link>
        <Link to="/sweetshop">sweet shop</Link>
        <Link to="/tumblers">tumblers</Link>
        <Link to="/vinyls">vinyls</Link>
        <Link to="/pens">pens</Link>
        <Link to="/lovemugs">love mugs</Link>
      </div>

      <div className="shopRight">
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
        <Link t0="order-history"> MY ORDERS</Link>
        <span className="cart">
          <Link to="/cart">Cart</Link>
        </span>
      </div>
    </section>
  );
}

export default ShopNav