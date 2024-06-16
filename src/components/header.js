import React from 'react';
import logo from "./constants/gg.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <a href="/"><img alt="logo" src={logo} /></a>
      <ul className="nav-list">
        <li><Link to='./offers'>Offers</Link></li>
        <li><Link to='./about'>About Us</Link></li>
        <li><Link to='./services'>Services</Link></li>
        <li><Link to='./'>Cart</Link></li>
        <button>Log in</button>
      </ul>
    </div>
  );
}

export default Header;
