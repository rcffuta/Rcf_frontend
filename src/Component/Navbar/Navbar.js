import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Logo'>

    <header>

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

      <nav id="nav-bar">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Sermon</a></li>
          <li><a href="#">Online Giving</a></li>
          <li><a className="highlighted" href="#">Meet our Excos</a></li>
        </ul>
      </nav>
    </header>
  )
}

console.log(nav);
const handleClick = () => {
  nav.classList.toggle("active");
  console.log("clicked");
}

//const Navbar = () => {
return (
  <div>
    <Link to="/">
      <Logo />
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