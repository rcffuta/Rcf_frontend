import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className='Logo'>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className='Navbar_link'>
        <Link to="/about">
          <span className='Exco_para'>About us</span>
        </Link>
        <Link to="/blog">
          <span className='Exco_para'> Blog</span>
        </Link>
        <Link to="/sermons">
          <span className='Exco_para'>Sermon</span>
        </Link>
        <Link to="/online_giving">
          <span className='Exco_para'>Online Giving</span>
        </Link>
        <Link to="/excos">
          <span className='Exco_btn'>Meet Our Excos</span>
        </Link>
      </div>

      <div id="menu-icon" onClick={handleClick}>
        <MenuIcon />
      </div>
    </header>
  )
}

export default Navbar