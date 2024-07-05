import React from "react";
import tag from "../utils/tag.png"
import { Link } from "react-router-dom";


const Offer = () => {
  

  return (
    < div className="flex flex-col items-center ">
    <div className="mx-2 p-6 w-6/12 flex flex-col bg-amber-50 items-center justify-center shadow-xl rounded-xl border-2  min-h-screen space-y-14 ">
      <div className="px-2 mx-2 flex flex-col items-center justify-center ">
      <img className="w-4/12" src={tag}/>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-[blueviolet] font-sans">No Offers Available!!</h1>
      <h1 className="text-lg font-bold text-[blueviolet] font-serif">We are updating Great Offers!!</h1>
      </div>
      <div className=" flex justify-center w-2/6 border-2 bg-[blueviolet] border-black rounded-md ">
       <Link to="/"> <li  className=" list-none text-bold text-2xl text-white shadow-xl scale-105">Return To Shop</li></Link>
      </div>
    </div>
    </div>
  );
};

export default Offer;
