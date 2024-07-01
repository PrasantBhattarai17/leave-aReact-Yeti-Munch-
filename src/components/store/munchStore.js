import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"

const munchStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default munchStore;