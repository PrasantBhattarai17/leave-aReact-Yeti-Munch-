import React from 'react';
import logo from "./utils/gg.png";
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {
 const Status=useOnlineStatus();

 const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex  p-1 m-1 justify-between bg-[blueviolet] shadow-lg rounded-lg">
      <ul className="flex items-center space-x-12 text-white text-lg">
      <a href="/"><img className="w-36 h-32" alt="logo" src={logo} /></a>
        <li className='colorOnHover'><Link to="/">Home</Link></li>
        <li  className='colorOnHover'><Link to='/offers'>Offers</Link></li>
            <li  className='colorOnHover'><Link to="/about">About Us</Link></li>
            <li  className=' colorOnHover'><Link to="/services">Services</Link></li>
      </ul>
      <ul className="flex items-center space-x-12 text-white text-lg">
        <li>Status:{Status?"ON":"OFF"}</li>
        <li className="text-xl font-bold"><Link to='./cart'>🛒-{cartItems.length}</Link></li>
        <button>Log in</button>
      </ul>
    </div>
  );
}

export default Header;
