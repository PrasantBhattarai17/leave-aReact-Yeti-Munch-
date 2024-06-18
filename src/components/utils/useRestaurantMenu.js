import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const[resInfo,setResInfo]=useState(null);
useEffect(()=>{
    fetchData();}
    ,[]);

const UseRestaurantList=(resId)=>{
    
   const fetchData=async ()=>{
    const response =await fetch(MENU_API+resId);
    json=await response.json();
    setResInfo(json.data);
   }



    return resInfo;
};

export default UseRestaurantList;