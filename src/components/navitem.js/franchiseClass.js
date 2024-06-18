//Created using class based component
import React from "react";
import { CDN } from "../utils/constants";
import Shimmer from "../shimmers/shimmer";
 
class Franchisee extends React.Component{


  render(){
   const {name,location,rating,cuisines,cost42,cloudinaryImgId}=this.props;

   if(rating===0)return <Shimmer/>;
 return   ( 
    <div className="services">
        
 <h1>Our services</h1>
 <h3>The franchisees connected to us :</h3>
 <img className="aboutimg"src={CDN+cloudinaryImgId}></img>
 <h4>Name:{name}</h4>
 <h4>Location:{location}</h4>
 <h4>Rating:{rating} stars</h4>
 <h4>Cuisines:{cuisines}</h4>
 <h4>cost For Two:{cost42}</h4>
 </div>
);

};
};

export default Franchisee;