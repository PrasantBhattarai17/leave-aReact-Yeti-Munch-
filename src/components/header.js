import React from 'react';
import logo from "./gg.png";

const Header = () => {
  return (
    <div className="header">
      <a href="/"><img alt="logo" src={logo} /></a>
      <ul className="nav-list">
        <li>Offers</li>
        <li>Sign In</li>
        <li>Cart</li>
        <button>Log in</button>
      </ul>
    </div>
  );
}

export default Header;
