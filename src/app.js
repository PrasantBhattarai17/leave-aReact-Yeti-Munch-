// index.js or AppLayout.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Offer from "./components/navitem.js/offers";
import About from "./components/navitem.js/about";
import Error from "./components/shimmers/error";
import { Outlet } from "react-router-dom";
import Franchisee from "./components/navitem.js/franchiseClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="hoot">
      <Outlet/>
      </div>
      <Footer />
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
        element:<Franchisee/>
      }
    ]
  }
]
);



root.render(<RouterProvider router={appRouter}/>);
