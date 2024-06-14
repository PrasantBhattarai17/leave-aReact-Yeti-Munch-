import React from 'react';
import logo from "./constants/gg.png";

const Header = () => {
  return (
    <div className="header">
      <a href="/"><img alt="logo" src={logo} /></a>
      <ul className="nav-list">
        <li><a href='./offers'>Offers</a></li>
        <li><a href='./'>About Us</a></li>
        <li><a href='./'>Contact</a></li>
        <li><a href='./'>Cart</a></li>
        <button>Log in</button>
      </ul>
    </div>
  );
}

export default Header;
