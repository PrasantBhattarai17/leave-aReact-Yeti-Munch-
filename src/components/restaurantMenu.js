import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";
import { CDN } from "./utils/constants";
import Shimmer from "./shimmers/shimmer";
import useRestaurantFood from "./utils/useRestaurantFood";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestaurantList(resId);
    const resMenu=useRestaurantFood(resId);
    const categories=resMenu.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    const {cloudinaryImageId,name,costForTwo,avgRating,areaName}=resInfo;    

    if (resInfo===0) return <Shimmer/>;

    return (
        <>
        {console.log(categories)}
    <div className="flex justify-start gap-4 pl-12 bg-amber-50">
        {/* {console.log(resMenu[0]?.card?.info?.name)}; */}
        <img className="p-1 m-1 w-80 rounded-xl " alt="name"  src={CDN+cloudinaryImageId}/>
        <div className="flex  flex-col justify-end">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-2xl">{areaName}</h2>
        <h3 className="text-lg">cost for two:{parseInt(costForTwo/100)}</h3>
        <h3 className="text-lg">Rating:{avgRating} stars</h3>
        </div>
    </div>
        <div  className=" pl-12 bg-amber-50">
        {categories.map((item)=><h1 className="text-xl font-[sans-serif] font-bold">{item?.card?.card?.title}</h1>)}
        </div>
        </>
    );
};

export default RestaurantMenu;