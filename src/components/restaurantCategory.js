import { useParams } from "react-router-dom";
import useRestaurantFood from "./utils/useRestaurantFood";
import { useState } from "react";
import { CDN } from "./utils/constants";
import { addItem ,moreItem} from "./store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";



const RestaurantCategory=()=>{
    const [selectedItem, setSelectedItem] = useState(null);
    const [add, setAdd] = useState("Add+");
    const {resId} = useParams();
    const resMenu=useRestaurantFood(resId);
    const categories=resMenu.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const cartItems=useSelector((store)=>store.cart.items);
    

    const handleClick = (item) => {
        setSelectedItem(selectedItem === item ? null : item);
      };
    const dispatch=useDispatch();
    const handleAdditem=(item)=>{
      setAdd("Added✅");
      dispatch(addItem(item));
          };
    

    return (
        <div>
          {categories.map((item) => (
            <div key={item?.card?.card?.title} className="flex flex-col justify-center items-center">
              <div
                onClick={() => handleClick(item)}
                className="px-12 h-12 w-6/12 bg-[#faf0e5] flex justify-between items-center my-2 shadow-lg cursor-pointer"
              >
                <span className="text-xl font-[sans-serif] font-bold">{item?.card?.card?.title}</span>
                <span className="text-xl font-[sans-serif] font-bold">🔽</span>
              </div>
              {selectedItem === item && (
                <div className="  px-12 py-4 w-6/12 bg-amber-50">
                 {item?.card?.card?.itemCards.map((dish)=>(<div key={dish?.card?.info?.id} className="flex flex-col shadow-lg border-b-2 cursor-pointer ">
                  <div className="flex items-end">
                  <img alt={dish?.card?.info?.name} src={CDN+dish?.card?.info?.imageId} className="p-1 m-1 w-[30%] h-[150px] rounded-md shadow-md"/>
                    <button onClick={()=>handleAdditem(dish)} className="absolute mb-3 left-[33.5%] rounded-lg w-12 bg-black text-[gold] hover:scale-105">
                      {cartItems.includes(dish)?add:"Add+"} 
                      </button>
                  <span className="py-2 my-2 text-lg font-[sans-serif] font-bold text-orange-800">{dish?.card?.info?.name}-Rs.{(dish?.card?.info?.defaultPrice)?dish?.card?.info?.defaultPrice/100:dish?.card?.info?.price/100}</span>
                  </div>
                 <span className="mx-2 px-2 text-sm font-[sans-serif] font-bold">➡️  {dish?.card?.info?.description}</span>
                  </div>))
                 }
              </div>
              )}
            </div>
          ))}
        </div>
      );

};
export default RestaurantCategory;