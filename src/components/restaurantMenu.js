import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);

    const {cloudinaryImageId,name,costForTwo,avgRating,areaName}=resInfo;    

    if (resInfo===0) return <Shimmer/>;

    return (
    <div className="restmenu">
        <img className="aboutimg" alt="name"  src={CDN+cloudinaryImageId}/>
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h3>cost for two:{costForTwo}</h3>
        <h3>Rating:{avgRating} stars</h3>
    </div>

    );
};

export default RestaurantMenu;