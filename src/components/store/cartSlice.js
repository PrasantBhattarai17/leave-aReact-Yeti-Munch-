import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        numItem:1,
    },
    reducers:{
        addItem:(state,action)=>{
         state.items.push(action.payload) ;       
        },
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1);
        },
        clearCart:(state,ation)=>{
            state.items.length=0;
        },
        moreItem:(state)=>{
           state.numItem+=1;
        }
    },
});


export const {addItem,removeItem,clearCart,moreItem}=cartSlice.actions;
export default cartSlice.reducer;