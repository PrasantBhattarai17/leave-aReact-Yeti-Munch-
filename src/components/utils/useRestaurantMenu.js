import { useState,useEffect } from "react";
import { MENU_API } from "./constants";



const useRestaurantList=(resId)=>{
    const[resInfo,setResInfo]=useState({});
    
   const fetchData=async ()=>{
    const response =await fetch(MENU_API+resId);
    json=await response.json();
    setResInfo(json.data);
   }

   useEffect(()=>{
    fetchData();}
    ,[]);



    return resInfo;
};

export default useRestaurantList;