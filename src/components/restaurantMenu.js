import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";
import useRestaurantFood from "./utils/useRestaurantFood";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);
    const resMenu=useRestaurantFood(resId);


    const {cloudinaryImageId,name,costForTwo,avgRating,areaName}=resInfo;    

    if (resInfo===0) return <Shimmer/>;

    return (
        <>
    <div className="flex justify-start gap-4 pl-12 bg-amber-50">
        {/* {console.log(resMenu[0]?.card?.info?.name)}; */}
        <img className="p-1 m-1 w-80 rounded-xl " alt="name"  src={CDN+cloudinaryImageId}/>
        <div className="flex  flex-col justify-end">
        <h1 className="text-3xl">{name}</h1>
        <h2 className="text-2xl">{areaName}</h2>
        <h3 className="text-lg">cost for two:{parseInt(costForTwo/100)}</h3>
        <h3 className="text-lg">Rating:{avgRating} stars</h3>
        </div>
    </div>
        <div  className=" pl-12 bg-amber-50">
            <h1 className="text-xl font-[sans-serif]">The Main courses Items:</h1>
           { Object.values(resMenu).map((item)=><h3 key={item.card.info.id} className="text-lg">-{item?.card?.info?.name}-Rs.{parseInt(item?.card?.info?.price)/100}</h3>)}
        </div>
        </>
    );
};

export default RestaurantMenu;