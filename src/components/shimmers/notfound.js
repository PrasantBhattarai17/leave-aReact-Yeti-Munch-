import React from 'react';
import logo from "../utils/gggg.png"
const Notfound = () => {
  return (
    <div className='m-2 p-2 flex   justify-center  min-h-screen '>
    <div  className="m-4 p-4 w-6/12 bg-amber-100 flex flex-col  items-center  shadow-xl rounded-xl border-2   space-y-10">
      <img className=" p-1 m-1 w-7/12  shadow-lg rounded-3xl" src={logo}/>
     <h2 className='text-3xl text-center font-bold font-sans text-[blueviolet]'>Oops! {<br/>} The item or Restaurant not found!!</h2>
     <a href="./" className='w-[180px] h-[30px] rounded-md shadow-xl font-bold text-white hover:scale-105 text-center bg-[blueviolet]'>Return to Home</a>
    </div>
    </div>
  );
};

export default Notfound;