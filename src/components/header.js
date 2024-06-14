import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <a href="/"><img alt="logo" src="Reactrapid/gg.png" /></a>
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
