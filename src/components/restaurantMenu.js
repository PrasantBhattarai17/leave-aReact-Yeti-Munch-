import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";
import RestaurantCategory from "./restaurantCategory";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);
  

    const {cloudinaryImageId,name,costForTwo,avgRating,areaName}=resInfo;    

    if (resInfo===0) return <Shimmer/>;

    return (
        <>
    <div className="flex justify-start  rounded-md gap-4 pl-12 shadow-lg bg-[#faf0e5]">
        <img className="p-1 m-1 w-80 rounded-xl " alt="name"  src={CDN+cloudinaryImageId}/>
        <div className="flex  flex-col justify-end">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-2xl">{areaName}</h2>
        <h3 className="text-lg">cost for two:{parseInt(costForTwo/100)}</h3>
        <h3 className="text-lg">Rating:{avgRating} stars</h3>
        </div>
    </div>
        <RestaurantCategory />
        </>
    );
};

export default RestaurantMenu;