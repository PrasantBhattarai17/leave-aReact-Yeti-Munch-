import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);
    console.log('Restaurant ID:', resId);
  console.log('Restaurant Info:', resInfo);
    const {cloudinaryImageId,name,costForTwo,avgRating,areaName}=resInfo;
    // const {itemCards}=resInfo?.data?.cards;


    return resInfo===0?<Shimmer/>:(
    <div className="restmenu">
        <img className="aboutimg" alt="name"  src={CDN+cloudinaryImageId}/>
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h3>cost for two:{costForTwo}</h3>
        <h3>{avgRating} stars</h3>
    </div>

    );
};

export default RestaurantMenu;