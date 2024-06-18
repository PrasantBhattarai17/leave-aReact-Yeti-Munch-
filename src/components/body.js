import Restro from "./restroCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmers/shimmer";
 import Notfound from "./shimmers/notfound";
import useOnlineStatus from "./utils/useOnlineStatus";

const filterData=(searchTxt,listOfRestaurants)=>{
  const filterData = listOfRestaurants.filter((restaurant)=>restaurant?.title?.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterData;
};

const Body=()=>{
     
  const [searchTxt,setSearchTXt]=useState("craving anything specific?");
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);

    const Fetchy = async () => {
      try {
          const response = await fetch("https://allsetnow.com/api/address/v5/?sort_point=29.38385,+-94.9027&limit=100&offset=0");
          
          if (!response.ok) {
              throw new Error("error!");
          }
  
          const json = await response.json();
  
          console.log(json);
          setListOfRestaurants(json?.data);
          setFilteredList(json?.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

      useEffect(() => {
        Fetchy();
    }, []);

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
      return(
        <h1>Sorry,you are Offline!!Please check your internet connection!!</h1>
      )
    }


      return  listOfRestaurants.length===0?<Shimmer/>:(
        <>
        <div className="search-container">
            <div className="search-box">
      <input type="text" placeholder="Search..." value={searchTxt}  onChange={(e)=>{
        setSearchTXt(e.target.value);
      }}/>

      <button onClick={()=>{
        const data = filterData(searchTxt,listOfRestaurants);
        setFilteredList(data);
      }}>Search</button>
    </div>
    </div>
    <div className="hoot">

    { filteredList.length === 0 ? <Notfound/> :
  (
    filteredList.map((restaurant) => (
      <Restro key={restaurant.id} Resdata={restaurant} />
    ))
  )
}
</div>

              </>
            
    )
  
};


export default Body;