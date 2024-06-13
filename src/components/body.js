import Restro from "./restroCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";

const filterData=(searchTxt,listOfRestaurants)=>{
  const filterData = listOfRestaurants.filter((restaurant)=>restaurant?.title?.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterData;
};

const Body=()=>{
     
  const [searchTxt,setSearchTXt]=useState("craving anything specific?");
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);

    const Fetchy = async () => {
        const response = await fetch(" https://allsetnow.com/api/address/v5/?sort_point=29.38385,+-94.9027&limit=100&offset=0");
        const json = await response.json();

           console.log(json);
               setListOfRestaurants(json?.data);
               setFilteredList(json?.data);
      };

      useEffect(() => {
        Fetchy();
    }, []);


      return  listOfRestaurants.length===0?<Shimmer/>:(
        <>
            <div className="Searchh">
      <input type="text" placeholder="Search..." value={searchTxt}  onChange={(e)=>{
        setSearchTXt(e.target.value);
      }}/>

      <button onClick={()=>{
        const data = filterData(searchTxt,listOfRestaurants);
        setFilteredList(data);
      }}>Search</button>
    </div>
    <div className="hoot">
            {filteredList.map((restaurant) => (
                <Restro key={restaurant.id} Resdata={restaurant} />
                
              ))}
              </div>
              </>
    )
};


export default Body;