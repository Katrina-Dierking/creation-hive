import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../navigations/mainNav/Nav'
import styles from './header.scss'

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Queen Bean <span>Design Cafe</span>
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        </div>
      <Nav />
    </header>
  )
  
}

export default Header