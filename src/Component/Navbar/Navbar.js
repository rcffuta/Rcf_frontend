import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <Link to="/">
      <Logo/>
      </Link>
      
      <div>
        <Link to="/about">
        <p>About us</p>
        </Link>
        <Link to="/blog">
        <p>Blog</p>
        </Link>
        <Link to="/sermons">
        <p>Sermon</p>
        </Link>
        <Link to="/online_giving">
        <p>Online Giving</p>
        </Link>
        <Link to="/excos">
        <p>Meet Our Excos</p>
        </Link>
        
       
        
       
        
      </div>
    </div>
  )
}

export default Navbar