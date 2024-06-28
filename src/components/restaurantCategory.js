import { useParams } from "react-router-dom";
import useRestaurantFood from "./utils/useRestaurantFood";
import { useState } from "react";



const RestaurantCategory=()=>{
    const [selectedItem, setSelectedItem] = useState(null);
    const {resId} = useParams();
    const resMenu=useRestaurantFood(resId);
    const categories=resMenu.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    const handleClick = (item) => {
        setSelectedItem(selectedItem === item ? null : item);
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
                <div className="px-12 py-4 w-6/12 bg-amber-50 shadow-lg">
                  <h1>Details</h1>
                  {/* Add more detail content here */}
                </div>
              )}
            </div>
          ))}
        </div>
      );

};
export default RestaurantCategory;