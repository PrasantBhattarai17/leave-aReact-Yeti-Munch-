import Restro, { RestaurantPromoted } from "./restroCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmers/shimmer";
 import Notfound from "./shimmers/notfound";
import useOnlineStatus from "./utils/useOnlineStatus";
import { RESTRO_API } from "./utils/constants";
import { Link } from "react-router-dom";

const filterData=(searchTxt,listOfRestaurants)=>{
  const filterData = listOfRestaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterData;
};

const Body=()=>{
     
  const [searchTxt,setSearchTXt]=useState("craving anything specific?");
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);

    const Fetchy = async () => {
          const response = await fetch(RESTRO_API);
          const json = await response.json();
          setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
        <div className="m-1 p-1 flex justify-center  space-x-2">
      <input  className=" border-2 border-black w-1/2 h-[50px] rounded-md p-2" type="text" placeholder="Search..." value={searchTxt}  onChange={(e)=>{
        setSearchTXt(e.target.value);
      }}/>

      <button   className=" border-2 border-black bg-violet-600 text-gray-50 w-20 rounded-md hover:bg-violet-800 text-lg shadow-md" onClick={()=>{
        const data = filterData(searchTxt,listOfRestaurants);
        setFilteredList(data);
      }}>Search</button>
    </div>
    <div className="flex m-1 p-1 flex-wrap justify-start gap-12">

    { filteredList.length === 0 ? <Notfound/> :
  (
    filteredList.map((restaurant) => (
      <Link data-testid="cardItem" className="nodecors"to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
        {restaurant.info.type === "T" ? (
              <RestaurantPromoted Resdata={restaurant} />
            ) : (
              <Restro Resdata={restaurant} />
            )}
      </Link>
    ))
  )
}
</div>
              </>

            
    )
  
};


export default Body;