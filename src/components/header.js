import React from 'react';
import logo from "./utils/gg.png";
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';

const Header = () => {
 const Status=useOnlineStatus();

  return (
    <div className="flex p-1 m-1 justify-between bg-[blueviolet] shadow-lg">
      <ul className="flex items-center space-x-12 text-white text-lg">
      <a href="/"><img className="w-24" alt="logo" src={logo} /></a>
        <li className='colorOnHover'><Link to="/">Home</Link></li>
        <li  className='colorOnHover'><Link to='./offers'>Offers</Link></li>
            <li  className='colorOnHover'><Link to="/about">About Us</Link></li>
            <li  className=' colorOnHover'><Link to="/services">Services</Link></li>
      </ul>
      <ul className="flex items-center space-x-12 text-white text-lg">
        <li>Status:{Status?"ON":"OFF"}</li>
        <li><Link to='./'>Cart</Link></li>
        <button>Log in</button>
      </ul>
    </div>
  );
}

export default Header;
