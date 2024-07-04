import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"

const MunchStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default MunchStore;