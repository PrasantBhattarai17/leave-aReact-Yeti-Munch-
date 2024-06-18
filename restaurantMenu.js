import { useParams } from "react-router-dom";
import UseRestaurantList from "./src/components/utils/useRestaurantMenu";
import { CDN } from "./src/components/utils/constants";

const RestaurantMenu=(resId)=>{

    const {resId} = useParams();
    const resInfo=UseRestaurantList(resId);

    const {cloudinaryImageId,name,cuisines,avgrating}=resInfo.data;
    const {itemCards}=resInfo?.data?.cards;


    return (
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