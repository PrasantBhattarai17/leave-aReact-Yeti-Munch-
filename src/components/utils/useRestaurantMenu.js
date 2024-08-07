import { useState,useEffect } from "react";
import { MENU_API } from "./constants";



const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState({});
    
   const fetchData=async ()=>{
    const response =await fetch(MENU_API+resId);
    const json=await response.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
   }

   useEffect(()=>{
    fetchData();}
    ,[]);



    return resInfo;
};

export default useRestaurantMenu;