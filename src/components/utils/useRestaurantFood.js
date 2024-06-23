import { useState,useEffect } from "react";
import { MENU_API } from "./constants";



const useRestaurantFood=(resId)=>{
    const[resMenu,setResMenu]=useState({});
    
   const fetchData=async ()=>{
    const response =await fetch(MENU_API+resId);
    json=await response.json();
    setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
   }

   useEffect(()=>{
    fetchData();}
    ,[]);



    return resMenu;
};

export default useRestaurantFood;