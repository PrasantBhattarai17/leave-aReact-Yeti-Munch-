import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);
    const {cloudinaryImageId,name,cuisines,avgrating,location}=resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards}=resInfo?.data?.cards;


    return resInfo===0?<Shimmer/>:(
    <div className="restmenu">
        <img alt="name"  src={CDN+cloudinaryImageId}/>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgrating} stars</h3>
    </div>

    );
};

export default RestaurantMenu;