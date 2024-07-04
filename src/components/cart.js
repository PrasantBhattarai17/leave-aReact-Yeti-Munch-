import { useDispatch, useSelector } from "react-redux";
import { CDN } from "./utils/constants";
import { clearCart } from "./store/cartSlice";
import { removeItem } from "./store/cartSlice";

const Cart=()=>{
    
    const addedItems=useSelector((store)=> store.cart.items);

    const dispatch=useDispatch();

    const handleRemove=(index)=>{
     dispatch(removeItem(index));
    };
    const handleClearCart=()=>{
    dispatch(clearCart());
    };

   
   
    return(
        <>  
            <div className="bg-amber-50 flex justify-center ">
            <div className="flex  w-6/12 justify-between ">         
               <h1 className="p-1 m-1 text-2xl text-[blueviolet] font-bold">My Cart - {addedItems.length} items</h1>
                <button onClick={handleClearCart} className="m-2  bg-[blueviolet] rounded-lg w-20 h-9 border-gray-800 border-2 font-san text-white ">Clear Cart</button>
                </div>
                </div>
                
                {(addedItems==0 && <h1  className="text-center px-1 mx-1 text-2xl bg-amber-50 text-[blueviolet] font-bold">The cart is Empty!! Please add some items.</h1>)}
           {addedItems.map((item,index)=>
           <>
           <div className=" flex justify-center  bg-amber-50  " key={index}>
            <div className="flex  justify-between shadow-lg m-2 p-2 w-6/12 border-t-2 border-[#f5ebe0]">
            <div> <img alt={item?.card?.info?.name} className="m-1 p-1 border-2 rounded-md shadow-xl w-52" src={CDN+item?.card?.info?.imageId}/>
            <div className="flex justify-between">
            <h1 className="p-1 m-1 text-2xl text-[blueviolet] font-bold">{item?.card?.info?.name}</h1>
                <div className="flex">
                <button className="p-1 m-1 text-2xl text-[blueviolet] font-bold">-</button>
              <h1 className="p-1 m-1 text-2xl text-[blueviolet] font-bold">1 items</h1>
             <button className="p-1 m-1 text-2xl text-[blueviolet] font-bold">+</button>
             </div>
            </div>
            <span className="p-1 m-1text-lg font-bold">{item?.card?.info?.description}</span>
            </div>
            <div>
            <span onClick={()=>handleRemove(index)} className="p-1 m-1 text-2xl text-[blueviolet] font-bold cursor-pointer">➖</span>
            </div>
           
            </div>
            </div>
            </>
          
         )
        
         };
        </>
    );
};
 export default Cart;