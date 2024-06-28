import { useParams } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantMenu";

const RestaurantCategory=()=>{
    const {resId} = useParams();
const resMenu=useRestaurantList(resId);
const categories=resMenu.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


return(
    <div>
        <h1>{categories[0]?.card?.card?.title}</h1>
    </div>
)


};
export default RestaurantCategory;