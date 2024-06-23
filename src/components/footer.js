import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./utils/gg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" flex flex-col items-center p-2 mx-1 text-gray-100 shadow-2xl bg-[blueviolet] rounded-lg ">
          <ul className='flex items-center gap-20 text-xl font-[sans-serif]'>
          <a href="/"><img className="w-24" alt="logo" src={logo} /></a>
            <li className=' colorOnHover '><Link to="/">Home</Link></li>
            <li  className='colorOnHover '><Link to="/about">About Us</Link></li>
            <li  className='colorOnHover '><Link to="/services">Services</Link></li>
            <li  className='colorOnHover '><Link to="/contact">Contact</Link></li>
            
          </ul>
        <p className='text-amber-200 '>&copy; 2024 Yeti Munch:Taste of Himalayas~All rights reserved!</p>
      </div>
    </footer>
  );
};

export default Footer; 