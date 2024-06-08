import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Restro from "./components/restroCard.js";
import Footer from "./components/footer.js";




const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout=()=>{
  return(
   <>
   <Header/>
    <div className="hoot">
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
    </div >
   <Footer/>
   </>
      );
};



root.render(<AppLayout/>);