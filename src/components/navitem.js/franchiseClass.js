//Created using class based component
import React from "react";
import { CDN } from "../utils/constants";
import Shimmer from "../shimmers/shimmer";
import { useParams } from "react-router-dom";
import useRestaurantFood from "../utils/useRestaurantFood";
 
class Franchisee extends React.Component{


  render(){
  

   const {name,location,rating,cuisines,cost42,cloudinaryImgId}=this.props;

   if(rating===0)return <Shimmer/>;
 return   ( 
  <div className="flex flex-col items-center">
    <div className="mx-2 p-4 w-7/12 flex flex-col bg-amber-50 items-center justify-center shadow-xl rounded-xl border-2  min-h-screen space-y-5 ">
        
 <h1 className="text-4xl font-bold text-[blueviolet] font-sans">Our services</h1>
 <h3 className="text-xl font-bold text-[blueviolet] font-sans">The franchisees connected to us :</h3>
 <img className="w-4/12  rounded-lg border-2 border-black"src={CDN+cloudinaryImgId}></img>
 <h4 className="text-3xl font-bold text-[blueviolet] font-sans">Name:{name}</h4>
 <h4 className="text-2xl font-bold text-[blueviolet] font-sans">Location:{location}</h4>
 <h4 className="text-2xl font-bold text-[blueviolet] font-sans">Cuisines:{cuisines}</h4>
 <h4 className="text-2xl font-bold text-[blueviolet] font-sans">Rating:{rating} stars</h4>
 </div>
 </div>
);

};
};

export default Franchisee;