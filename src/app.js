// index.js or AppLayout.js
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Offer from "./components/navitem.js/offers";
import About from "./components/navitem.js/about";
import Error from "./components/shimmers/error";
import { Outlet } from "react-router-dom";
import { lazy ,Suspense} from "react";
import Shimmer from "./components/shimmers/shimmer";
import RestaurantMenu from "./components/restaurantMenu";
import { Provider } from "react-redux";
import MunchStore from "./components/store/munchStore";
import Cart from "./components/cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Services =lazy(()=>import("./components/navitem.js/service"));


const AppLayout = () => {
  return (
    <>
     <Provider store={MunchStore}>
       <Header />
      <div className="
      bg-[#f1efed] p-1 m-1">
      <Outlet/>
      </div>
      <Footer />
      </Provider>
    </>
  );
};
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/offers",
        element:<Offer/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Suspense  fallback={<Shimmer/>} ><Services/></Suspense>
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/cart",
        element:<Cart />
      },
    ]
  }
]
);



root.render(<RouterProvider router={appRouter}/>);
