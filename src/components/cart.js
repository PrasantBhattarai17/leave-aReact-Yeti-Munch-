import { useDispatch, useSelector } from "react-redux";
import { CDN } from "./utils/constants";
import { clearCart } from "./store/cartSlice";

const Cart=()=>{

    const dispatch=useDispatch();
    const handleClearCart=()=>{
    dispatch(clearCart());
    };
    const addedItems=useSelector((store)=> store.cart.items);
    return(
        <>  
            <div className="bg-amber-50 flex justify-center">
                <button onClick={handleClearCart} className="m-2  bg-[blueviolet] rounded-lg w-20 h-9 border-gray-800 border-2 font-san text-white ">Clear Cart</button>
                </div>
                
                {(addedItems==0 && <h1  className="text-center px-1 mx-1 text-2xl bg-amber-50 text-[blueviolet] font-bold">The cart is Empty!! Please add some items.</h1>)}
           {addedItems.map((item)=>
           <div className=" flex justify-center  bg-amber-50  " key={item?.card?.info?.id}>
            <div className="flex  shadow-lg m-2 p-2 w-6/12 border-t-2 border-[#f5ebe0]">
            <div> <img alt={item?.card?.info?.name} className="m-1 p-1 border-2 rounded-md shadow-xl w-52" src={CDN+item?.card?.info?.imageId}/>
            <h1 className="p-1 m-1 text-2xl text-[blueviolet] font-bold">{item?.card?.info?.name}</h1>
            <span className="p-1 m-1text-lg font-bold">{item?.card?.info?.description}</span></div>
            <div>
            <span className="p-1 m-1 text-2xl text-[blueviolet] font-bold">➖</span>
            </div>
           
            </div>
            </div>
          
        )
        }
        </>
    );
};
 export default Cart;